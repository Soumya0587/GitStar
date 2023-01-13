import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CommonCard from "../Components/CommonCard";
import Loader from "../Components/Loader";

const Css = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        "https://api.github.com/search/repositories?q=stars:%3E1+language:css?sort:interactions-desc"
      )
      .then(res => {
        setData(res.data.items);
        
        setLoader(false);
      })
      .catch(err => {
        alert("error")
        setLoader(false);
      });
  }, []);

  console.log(data) 
  if(loader) return <Loader/>
  return <Box display='grid' gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} gap="20px 10px">
        {
          data?.map((ele)=>{
            return <CommonCard key={ele.id} 
            name={ele.name} 
            language={ele.language} 
            avatar={ele.owner.avatar_url} 
            stargazers_count={ele.stargazers_count}
            forks_count={ele.forks_count}
            html_url={ele.html_url}
            />
          })
        }
  </Box>;
};

export default Css;