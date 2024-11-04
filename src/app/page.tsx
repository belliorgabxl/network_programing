"use client"
import Content from "./content";
import AboutUsPage_article from "./article";
import { useEffect ,useState} from "react";

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
   <div className="bg-gray-900 pb-40  w-full px-5 pt-5">
    <div className="justify-start flex">
      <div className=" px-10 py-3 text-2xl text-white rounded-md shadow-md shadow-black bg-blue-600 ">
      Domain Name :
      </div>
      <div className="text-white text-3xl py-3 mx-5">
        Gabel Patarajarin
      </div>
      
    </div>
    <div className="mb-10">
      <Content/>
    </div>
    <div className="w-full px-10 flex justify-start">
          <h1
            className={`text-3xl my-5 duration-1000 text-white py-4 shadow-md shadow-gray-900 rounded-lg bg-blue-950   ${
              isLoading ? "px-60" : "px-4 bg-gray-950"
            }`}
          >
            Telecommunication
          </h1>
        </div>
        <AboutUsPage_article isLoading={isLoading} />
   </div>
  );
}
