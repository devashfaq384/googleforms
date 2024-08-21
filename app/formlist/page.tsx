"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
// 
export default function Create() {
  const [forms, setForms] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/form");
        const data = await response.json();
        setForms(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <main>
      <Navbar />
      <main className="grid place-items-center px-7 mx-auto w-full max-w-3xl">
        {loading && <main>Loading.....</main>}
        {!loading && forms && (

          <ul className="w-full">
            <div className="text-center font-extrabold text-[#2f6d9a] py-10 text-3xl">Show Forms</div>
            {forms.forms.map((form: any, id: number) => {
              return (
                <li 
                  className="list-decimal  flex justify-between items-center bg-[#295bb1]/70 rounded-lg text-white py-3 w-full my-1 px-5"
                  key={id}
                >
                  <span className="capitalize">{id+1}. &nbsp; {form.title}</span>
                  <button className="bg-[#295bb1] rounded-lg py-[4px] px-[8px] " >
                    <a href={`/form/${form._id}`} className="text-sm text-white lowercase hover:shadow-xl cursor-pointer">Open</a>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </main>
  );
}
