import React from "react";
import Card from "./components/Card";

const App = () => {

 const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },

  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$140/hr",
    location: "Bangalore, India",
  },

  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    title: "React Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Hyderabad, India",
  },

  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$180/hr",
    location: "Delhi, India",
  },

  {
    id: 5,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    posted: "6 days ago",
    title: "UI Designer",
    type: "Part-Time",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Pune, India",
  },

  {
    id: 6,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "Today",
    title: "UX Researcher",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$170/hr",
    location: "Chennai, India",
  },

  {
    id: 7,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    posted: "4 days ago",
    title: "Visual Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Remote",
  },

  {
    id: 8,
    company: "Meta",
    logo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    posted: "2 weeks ago",
    title: "Full Stack Developer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$200/hr",
    location: "Gurgaon, India",
  },

  {
    id: 9,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    posted: "1 day ago",
    title: "Interaction Designer",
    type: "Remote",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Remote",
  },

  {
    id: 10,
    company: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    posted: "3 days ago",
    title: "Software Engineer",
    type: "Full-Time",
    level: "Junior Level",
    salary: "$110/hr",
    location: "Noida, India",
  },
];

  return (
    <div className="parent">
 {jobs.map(function(elem,idx){
 return <div key={idx}> //key hr ek elemnt ko uniquely define krti h
  <Card company={elem.company}
           logo={elem.logo}  
           posted={elem.posted}  
           title={elem.title}  
           type={elem.type}  
           level={elem.level}  
           salary={elem.salary}  
           location={elem.location}  
           
          /></div>
 })}
    </div>
  );
};

export default App;