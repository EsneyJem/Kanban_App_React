import {v4 as uuidv4} from "uuid";

const mockData = [
  {
   id: uuidv4(),
   title: "📝 Por Hacer",
   tasks:[
    {
      id:uuidv4(),
      title:"Aprender HTML5"
    },
    {
      id:uuidv4(),
      title:"Aprender javascript"
    },
    {
      id:uuidv4(),
      title:"Aprender CSS"
    },
    {
      id:uuidv4(),
      title:"Aprender react"
    },
    {
      id:uuidv4(),
      title:"Aprender nodejs"
    }
   ] 
  },
  {
    id:uuidv4(),
    title:'🖍 En progreso',
    tasks:[
      {
        id:uuidv4(),
        title:'Curso de Rect'
      },
      {
        id:uuidv4(),
        title:'Curso de Nodejs'
      } 
    ]
  },
  {
    id:uuidv4(),
    title:'✅ Completadas',
    tasks:[
      {
        id:uuidv4(),
        title:'Curso HTML'
      },
      {
        id:uuidv4(),
        title:'Curso CSS'
      },
      {
        id:uuidv4(),
        title:'Curso Javascript'
      }
    ]
  }
];

export default mockData;