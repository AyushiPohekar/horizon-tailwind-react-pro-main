import React from 'react';
const Contact2=()=>{
    let openModal=false;
    const handleFileUpload=(e)=>{
        e.preventDefault();
    }
    return(
    <>
    <div class="w-full px-10 mt-5">
    <div class="w-full mb-5 flex flex-row gap-4">
      <label
        for="fileInput"
        class="cursor-pointer rounded-full bg-[#7551FF] hover:bg-secondarycolor-500 px-4 py-2 text-md font-normal text-white shadow-xl"
      >
        Upload Bulk
      </label>
      <input
        type="file"
        id="fileInput"
        class="hidden"
        onChange={handleFileUpload}
        accept=".xlsx, .xls"
      />
      <button
        onClick={openModal}
        class="cursor-pointer rounded-full bg-[#7551FF] hover:bg-secondarycolor-500 px-4 py-2 text-md font-normal text-white shadow-xl"
        >+Add
      </button>
    </div>
  </div>

  <div class="w-full px-10 mt-3">
  <table class="w-full  table-fixed text-lg text-white rounded-[20px]">
  <thead class='bg-[#7551FF]'>
    <tr>
      <th>id</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
      <th>Phone Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody class='border-1'>
  
  </tbody>
</table>
  </div>
  </>
  
    )
  
}
export default Contact2