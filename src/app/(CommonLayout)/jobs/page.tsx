
import { CustomFilter } from '@/components/cui/CustomFilter'
import { CustomSearchBar } from '@/components/cui/CustomSearchBar'
import { CustomModal } from '@/components/modal/CustomModal'
// import { jobDatas } from '@/data/jobDatas'
import { FaBars } from "react-icons/fa6";
import CustomPagination from '@/components/cui/CustomPagination'
import { myFetch } from '@/utils/myFetch'
import JobPostCard from '@/components/card/JobPostCard'
import LocationPicker from '@/components/map/LocationPicker';
import { getCoordinates } from '@/utils/getCoordinate';


const Jobs = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const newSearchParams = await searchParams;

  const category = newSearchParams.category || "";
  const subCategory = newSearchParams.subCategory || "";
  const price = newSearchParams.price || "";
  const radius = newSearchParams.radius || "";
  const salaryType = newSearchParams.salaryType || "";


  const location = newSearchParams.location || "";
  const fetchCors = await getCoordinates(location);
  const cordinates = fetchCors?.data;
  console.log(cordinates)

  const page = newSearchParams?.page || 1;
  const limit = newSearchParams?.pageSize || 10;

  // const res = await myFetch(`/job?page=${page}&limit=${limit}`);
  // const res = await myFetch(`/job?page=${page}&limit=${limit}&category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&maxSalary=${price}&radius=${radius}&address=${location}&latitude=${cordinates?.[0].lat}&longitude=${cordinates?.[0].lng}`);

  // const url = `/job?page=${page}&limit=${limit}&category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&maxSalary=${price}&radius=${radius}&address=${location}&latitude=${cordinates?.[0].lat}&longitude=${cordinates?.[0].lng}`
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

  const url = `/job?${params.toString()}`;
  console.log("jobs filter url : ", url);
  const res = await myFetch(url);


  const jobDatas = res?.data || [];
  const meta: any = res?.pagination || {};
  console.log("Job get res : ", jobDatas);
  console.log("Job meta res : ", res);


  return (
    <div className='maxWidth'>
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
          title="Jobs Filter Options"
          trigger={<button className='border border-gray-400 p-3 text-gray-500 rounded-full cursor-pointer'>
            <FaBars className='text-xl' />
          </button>}
        >
          <CustomFilter />
        </CustomModal>
      </div>

      {/* --------------- Jobs --------------- */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {jobDatas && jobDatas?.map((item: any, index: number) => (
            <JobPostCard key={index} item={item} url={`/jobs/${item._id}`} />
          ))}
        </div>
      </div>

      {/* --------------- Jobs --------------- */}
      <div className='py-12'>
        <CustomPagination TOTAL_PAGES={meta?.totalPages} />
      </div>

    </div>
  )
}

export default Jobs