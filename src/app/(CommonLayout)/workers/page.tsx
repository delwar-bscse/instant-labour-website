
// "use client"
import { heroWorkerImg } from '@/assets/assets'
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import WorkerCard from '@/components/card/workerCard'
// import { workerDatas } from '@/data/workerDatas'
import { getUserRoleEmployer } from '@/utils/getUserRoleServer'
import Link from 'next/link'
import { myFetch } from '@/utils/myFetch'
import LocationPicker from '@/components/map/LocationPicker'
import { getCoordinates } from '@/utils/getCoordinate'


const Workers = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const isEmployer = await getUserRoleEmployer();
  const newSearchParams = await searchParams;
  const workers = newSearchParams.workers;
  const type = newSearchParams.type;

  const category = newSearchParams.category || "";
  const subCategory = newSearchParams.subCategory || "";
  const price = newSearchParams.price || "";
  const radius = newSearchParams.radius || "";
  const salaryType = newSearchParams.salaryType || "";

  const location = newSearchParams.location || "";
  const fetchCors = await getCoordinates(location);
  const cordinates = fetchCors?.data;


  const page = newSearchParams?.page || 1;
  const limit = newSearchParams?.pageSize || 10;

  // const res = await myFetch(`/user/workers?page=${page}&limit=${limit}`);
  // const res = await myFetch(`/user/workers?page=${page}&limit=${limit}&category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&maxSalary=${price}&radius=${radius}&address=${location}&latitude=${cordinates?.[0]?.lat}&longitude=${cordinates?.[0]?.lng}`);

  // const url = `/user/workers?page=${page}&limit=${limit}`
  // if (category) url.concat(`&category=${category}`);
  // if (subCategory) url.concat(`&subCategory=${subCategory}`);
  // if (salaryType) url.concat(`&salaryType=${salaryType}`);
  // if (price) url.concat(`&maxSalary=${price}`);
  // if (radius) url.concat(`&radius=${radius}`);
  // if (location) url.concat(`&address=${location}&latitude=${cordinates?.[0]?.lat}&longitude=${cordinates?.[0]?.lng}`);
  // const res = await myFetch(url);
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (category) params.append("category", category);
  if (subCategory) params.append("subCategory", subCategory);
  if (salaryType) params.append("salaryType", salaryType);
  if (price) params.append("minSalary", "0");
  if (price) params.append("maxSalary", price);
  if (radius) params.append("radius", radius);

  if (location && cordinates?.[0]) {
    params.append("address", location);
    params.append("latitude", String(cordinates[0].lat));
    params.append("longitude", String(cordinates[0].lng));
  }

  const url = `/user/workers?${params.toString()}`;
  console.log("workers filter url : ", url);
  const res = await myFetch(url);


  const refineRes = res?.data?.data?.map((item: any) => {
    return {
      _id: item?._id,
      profile: item?.profile,
      name: item?.name,
      verified: item?.isAccountVerified,
      createdAt: item?.createdAt,
      category: item?.category,
      location: item?.address,
      salary: item?.salary,
      salaryType: item?.salaryType,
      status: item?.status
    };
  }) || [];
  console.log("worker refine res : ", refineRes);

  // const workerDatas = res?.data?.data || [];
  const meta: any = res?.data?.meta || {};
  // console.log("worker get res : ", workerDatas);
  // console.log("worker meta res : ", res);



  return (
    <div className='maxWidth'>
      {/* --------------------- Hero Worker Section --------------------- */}
      {isEmployer && type !== "instantLabour" && <>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl text-gray-800 font-bold leading-20 capitalize">find labour for <br />your short-term <br />or day job</h1>
            <p className="text-gray-600 mt-4">connects with local labour available now for temporary work.</p>
            {workers !== "instantLabour" && <div className='max-w-50 mt-12'>
              <Link href="/employer/posted-jobs/post-job" className='block w-full bg-brandClr2 text-gray-50 hover:bg-brandClr2/80 py-2 rounded-sm text-center font-semibold'>Post A Job</Link>
            </div>}
          </div>
          <div className="flex justify-center items-center">
            <Image src={heroWorkerImg} alt="Hero Image" width={1000} height={1000} className='w-75 h-75 lg:w-100 lg:h-100 object-cover rounded-full' />
          </div>
        </div>

        {/* --------------------- Available Labour Banner --------------------- */}
        <div className='bg-[#548EE8] py-2 mb-12'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-50 text-center capitalize'>available labour</h2>
        </div>
      </>}

      {/* --------------- Google Map --------------- */}
      <div>
        <LocationPicker locations={cordinates || []} />
      </div>

      {/* --------------- Search and Jobs Filter Options --------------- */}
      <div className='flex items-center gap-4 py-8'>
        <div className='flex-1'>
          <CustomSearchBar placeholder="Search by location" query="location" />
        </div>
        <CustomModal
          title="Workers Filter Options"
          trigger={<button className='border border-gray-400 p-3 text-gray-500 rounded-full cursor-pointer'>
            <FaBars className='text-xl' />
          </button>}
        >
          <CustomFilter />
        </CustomModal>
      </div>

      {/* --------------- Workers --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {refineRes?.map((item: any) => (
            <Link href={`/workers/${item._id}`} key={item._id} className='space-y-2 bg-white hover:bg-gray-50 customShadow p-4 cursor-pointer transition-colors duration-100'>
              <WorkerCard item={item} />
            </Link>
          ))}
        </div>
      </div>

      {/* --------------- Pagination --------------- */}
      <div className='py-12'>
        <CustomPagination TOTAL_PAGES={meta?.totalPages} />
      </div>

    </div>
  )
}

export default Workers