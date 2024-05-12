// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";

// const MySubmittedAsn = () => {
//   const { user } = useContext(AuthContext);
//   const [asnmnts, setAsnmnts] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios(
//         `${import.meta.env.VITE_API_URL}/asnmnts/${user?.email}`
//       );
//       setAsnmnts(data);
//     };
//     getData();
//   }, [user]);
// console.log(asnmnts);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
//       {asnmnts.map((asnmnt) => (
//         <div
//           key={asnmnt._id}
//           className="w-full bg-white shadow-md rounded-md overflow-hidden"
//         >
//           <div className="px-4 py-4">
//             <h2 className="text-xl font-semibold text-gray-800">
//               {asnmnt.title}
//             </h2>
//             <p className="text-sm badge">soon</p>
//           </div>
//           <div className="px-4 py-2 border-t border-gray-200">
//             <div className="flex gap-5 items-center">
//               <p className="text-sm text-gray-600">Total Marks:</p>
//               <p className="text-sm text-gray-800">{asnmnt.marks}</p>
//             </div>
//             <div className="flex gap-5 items-center mt-2">
//               <p className="text-sm text-gray-600">Obtained Marks:</p>
//               <p className="text-sm text-gray-800">soon</p>
//             </div>
//             <div className="mt-2 flex gap-5">
//               <p className="text-sm text-gray-600">Feedback:</p>
//               <p className="text-sm badge">soon</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MySubmittedAsn;
