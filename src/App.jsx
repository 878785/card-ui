import React from 'react'
import Card from './card'

 const App = () => {
  const jobs = [
  {
    id: 1,
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?pid=Api&P=0&h=180",
    companyName: "Meta",
    jobTitle: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 140,
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://logospng.org/download/apple/logo-apple-4096.png",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 150,
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    jobTitle: "Data Engineer",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 95,
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
    companyName: "Netflix",
    jobTitle: "UI/UX Designer",
    datePosted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 160,
    location: "Delhi, India"
  },
  {
    id: 5,
    brandLogo: "https://www.pngarts.com/files/11/Google-Logo-Icon-PNG-Photo.png",
    companyName: "Google",
    jobTitle: "Backend Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 130,
    location: "Pune, India"
  },
  {
    id: 6,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 145,
    location: "Chennai, India"
  },
  {
    id: 7,
    brandLogo: "https://car-brand-names.com/wp-content/uploads/2015/05/Tesla-Logo.jpg",
    companyName: "Tesla",
    jobTitle: "AI Engineer",
    datePosted: "6 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 155,
    location: "Gurgaon, India"
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/originals/c5/73/49/c57349d1de8e1834c3d93a2e8f9ef615.png",
    companyName: "Adobe",
    jobTitle: "Product Designer",
    datePosted: "8 days ago",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: 135,
    location: "Remote"
  },
  {
    id: 9,
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.vIMDdzMsSJuRdnJ2MBktswHaHa?pid=Api&P=0&h=180",
    companyName: "NVIDIA",
    jobTitle: "Machine Learning Engineer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 125,
    location: "Noida, India"
  },
  {
    id: 10,
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.BUKKb3p5DqBJNKAgIIRc4AHaD4?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    jobTitle: "DevOps Engineer",
    datePosted: "10 weeks ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 120,
    location: "Kolkata, India"
  }
];

  return (
    <div className="flex">
       {jobs.map(function(elem){
          return <Card logo = {elem.brandLogo} company = {elem.companyName} post = {elem.datePosted} title = {elem.jobTitle} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location= {elem.location} />
       })}
    </div>
  )
}

export default App;