 const cards = [
  {
    id: "card-1",
    title: "Learning how to cook",
  },
  {
    id: "card-2",
    title: "Making sandwich",
  },
  {
    id: "card-3",
    title: "Taking the trash out",
  },
]

const data = { //axiostan çekilen verileri buradan al.
  lists: {
    "list-1": {
      id:"1" ,
      title:"sdssd" ,
      cards,
    }
   
  },
  listIds: ["list-1"],
}

export default data 
