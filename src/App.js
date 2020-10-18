import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app_videos">
        <Video
        url="https://v16-web-newkey.tiktokcdn.com/d93fb5c9ad4d9ebb1de6773d1d5dba9a/5f897359/video/tos/useast2a/tos-useast2a-pve-0068/88e5d7ebbe514955b410734a4b5354bd/?a=1988&br=5284&bt=2642&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202010160417460101901880175000A394&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2VkZzt5dDpveDMzZTczM0ApO2Q6OjpkMzxnNzkzODNkaWctc2YxL3BmbzBfLS0wMTZzczAvLjMwMDYvLi0yX142YS06Yw%3D%3D&vl=&vr="
          channel="raymond"
          song="Usher- let it burn"
          likes={410}
          messages={400}
          shares={200}
        />
      
      
      </div>
    </div>
  );
}

export default App;
