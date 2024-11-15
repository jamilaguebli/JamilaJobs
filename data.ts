export interface Job {
    id: number;
    title: string;
    image: string;
    salary: string;
    location: string;
    jobtype: string;
  }
  
  const JobData: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      image: "/images/c1.png",
      salary: "1500D - 2500D",
      location: "Tunis",
      jobtype: "full time",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      image: "/images/c2.png",
      salary: "2000D - 3000D",
      location: "Sousse",
      jobtype: "full time",
    },
    {
      id: 3,
      title: "Fronetend Engineer",
      image: "/images/c3.png",
      salary: "1000D - 1500D",
      location: "Benzert",
      jobtype: "full time",
    },
    {
      id: 4,
      title: "Backend Developer",
      image: "/images/c4.png",
      salary: "25k - 30k",
      location: "USA",
      jobtype: "Part time",
    },
    {
      id: 5,
      title: "Fullstack Developer",
      image: "/images/c5.png",
      salary: "55k - 60k",
      location: "France",
      jobtype: "full time",
    },
    {
      id: 6,
      title: "Web Designer",
      image: "/images/c6.png",
      salary: "25k - 30k",
      location: "Canada",
      jobtype: "Freelance",
    },
  ];
  
  export default JobData;