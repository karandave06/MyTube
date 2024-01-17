import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const data = [
  {
    _id: "65a3f397e5d9727dd0a0b553",
    userId: "659d6ce92f2d4b51c1e3ca36",
    title:
      "वरुण माला को कैसे खोजेंगे तथाचार्य - तेनाली रामा, Ep. - 356, 357, 358, 359",
    desc: "\n430,108 views  4 Sept 2023  #neethashetty #krishnabharadwaj #pankajberry\nवरुण माला को कैसे खोजेंगे तथाचार्य - तेनाली रामा - Tenali Rama - 356-359\n------------------------------------------------------------------------------------------------\n\n#krishnabharadwaj\n#pankajberry \n#neethashetty \n#soniasharma \n#priyamvadakant \n\nTenali Rama EP - 356-359\n\nतेनाली राम के बारे में:\n--------------------------------\nयह शो एक 20 वर्षीय लड़के तेनाली राम की यात्रा को दर्शाता है जो अमीर और प्रसिद्ध बनने का सपना देखता है लेकिन अपने सपनों को पूरा करने में बहुत आलसी है। जब तेनाली को शादी के लिए मजबूर किया जाता है और उसे आजीविका कमाने के लिए मजबूर किया जाता है, तो एक पूज्य संत उसे गाँव के मंदिर में जाने और एक विशिष्ट मंत्र का जाप करने के लिए कहते हैं। तेनाली वैसा ही करता है जैसा उसे कहा गया था और देवी काली दूध का कटोरा और दही का कटोरा लेकर राम के सामने आती हैं और उनसे एक चुनने के लिए कहती हैं लेकिन तेनाली दोनों को चख लेता है जिससे काली क्रोधित हो जाती है। बाद में, तेनाली ने समझाया कि एक के बिना दूसरे का क्या उपयोग। देवी काली उनकी बुद्धि से प्रभावित हो जाती हैं और कहती हैं कि वह कृष्णदेवराय के दरबार में एक वैकटवी, एक मज़ाक करने वाले कवि बनेंगे। तेनाली राम रायस दरबार का हिस्सा बनने की इच्छा से हम्पी के लिए प्रस्थान करता है।\nयह लोकप्रिय श्रृंखला तेनाली की यात्रा का वर्णन करती है जो अपनी समय पर बुद्धि और बुद्धिमत्ता से मामलों को सुलझाता है जिसके कारण वह राजा के दरबार में बहुत लोकप्रिय हो जाता है।\n\nलोकप्रिय धारावाहिक देखने के लिए Captain भक्ति यूट्यूब चैनल को SUBSCRIBE कीजिये : https://www.youtube.com/@RISHUENTERTA...",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/mytube-5d826.appspot.com/o/1705243164943hqdefault.jpg?alt=media&token=9f258866-4d8d-455c-8cee-e1da5c278684",
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/mytube-5d826.appspot.com/o/1705243005346%E0%A4%B5%E0%A4%B0%E0%A5%81%E0%A4%A3%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%95%E0%A5%8B%20%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87%20%E0%A4%96%E0%A5%8B%E0%A4%9C%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%20%E0%A4%A4%E0%A4%A5%E0%A4%BE%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20-%20%E0%A4%A4%E0%A5%87%E0%A4%A8%E0%A4%BE%E0%A4%B2%E0%A5%80%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%BE%2C%20Ep.%20-%20356%2C%20357%2C%20358%2C%20359.mp4?alt=media&token=a771dbd2-e0b5-49d8-ab33-8805c696146f",
    videoViews: 0,
    tags: ["Enternment"],
    likes: ["659948c0dbe40827ba298231"],
    dislike: [],
    createdAt: "2024-01-14T14:45:43.818Z",
    updatedAt: "2024-01-16T11:52:54.619Z",
    __v: 0,
  },
];

const MainView = () => {
  const [videos, Setvideos] = useState();
  useEffect(() => {
    const fatchVideos = async () => {
      const res = axios.get(`${import.meta.env.VITE_SOME_KEY}/video/random`);
      Setvideos((await res).data);
    };
    fatchVideos();
  }, []);

  return (
    <>
      {/* w-[calc(100%-16rem)] */}
      <div
        className="md:w-[calc(100%-4rem)] w-full grid 
       py-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-8 p-4 ml-auto  h-full"
      >
        {videos?.map((index) => (
          <Card id={index._id} key={index._id} video={index} />
        ))}
      </div>
    </>
  );
};

export default MainView;
