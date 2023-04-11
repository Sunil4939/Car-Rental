import icons from "./icons";
import images from "./images"


const CarList = [
    {
        id:1,
        name: 'FORD FIESTA',
        image: images.car1,
        year: "2000",
        added: "5day ago",
        active: true,
    },
    {
        id:2,
        name: 'Honda Civic',
        image: images.car2,
        year: "2000",
        added: "5day ago",
        active: false,
    },
    {
        id:3,
        name: 'Suzuki Swift',
        image: images.car3,
        year: "2000",
        added: "5day ago",
        active: true,
    },
    {
        id:4,
        name: 'FORD FIESTA',
        image: images.car1,
        year: "2000",
        added: "5day ago",
        active: true,
    },
    {
        id:5,
        name: 'Honda Civic',
        image: images.car2,
        year: "2000",
        added: "5day ago",
        active: false,
    },
    {
        id:6,
        name: 'Suzuki Swift',
        image: images.car3,
        year: "2000",
        added: "5day ago",
        active: true,
    },
    {
        id:7,
        name: 'FORD FIESTA',
        image: images.car1,
        year: "2000",
        added: "5day ago",
        active: true,
    },
    {
        id:8,
        name: 'Honda Civic',
        image: images.car2,
        year: "2000",
        added: "5day ago",
        active: false,
    },
    {
        id:9,
        name: 'Suzuki Swift',
        image: images.car3,
        year: "2000",
        added: "5day ago",
        active: true,
    },
];

const Booked = [
    {
        id: 1,
        time: "Mon, Oct 10, 10:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 6525451836",
        startTrip: "Rajwada, Indore, Madhya Pradesh",
        endTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        price: "$1000",
    },
    {
        id: 2,
        time: "Mon, Oct 21, 08:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 652548005",
        startTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        endTrip: "Rajwada, Indore, Madhya Pradesh",
        price: "$900",
    },
    {
        id: 3,
        time: "Mon, Oct 10, 10:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 6525451836",
        startTrip: "Rajwada, Indore, Madhya Pradesh",
        endTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        price: "$1000",
    },
    {
        id: 4,
        time: "Mon, Oct 21, 08:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 652548005",
        startTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        endTrip: "Rajwada, Indore, Madhya Pradesh",
        price: "$900",
    },
    {
        id: 5,
        time: "Mon, Oct 10, 10:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 6525451836",
        startTrip: "Rajwada, Indore, Madhya Pradesh",
        endTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        price: "$1000",
    },
    {
        id: 6,
        time: "Mon, Oct 21, 08:25",
        source: icons.car1,
        currentLocation: "Prime Sedan, ABC 652548005",
        startTrip: "Vijay Nagar, Indore, Madhya Pradesh",
        endTrip: "Rajwada, Indore, Madhya Pradesh",
        price: "$900",
    },
]

const Message = [
    {
        id: 1,
        userName: "Willenamas ",
        profile: images.person1,
        message: "Thank you so much",
        time: "15:50"
    },
    {
        id: 2,
        userName: "Liam Noah",
        profile: images.person1,
        message: "Thank you so much",
        time: "Yesterday"
    },
    {
        id: 3,
        userName: "Henry",
        profile: images.person1,
        message: "Thank you so much",
        time: "2 days"
    },
    {
        id: 4,
        userName: "Willenamas ",
        profile: images.person1,
        message: "Thank you so much",
        time: "15:50"
    },
    {
        id: 5,
        userName: "Liam Noah",
        profile: images.person1,
        message: "Thank you so much",
        time: "Yesterday"
    },
    {
        id: 6,
        userName: "Henry",
        profile: images.person1,
        message: "Thank you so much",
        time: "2 days"
    },
    {
        id: 7,
        userName: "Henry",
        profile: images.person1,
        message: "Thank you so much",
        time: "2 days"
    },
    {
        id: 8,
        userName: "Willenamas ",
        profile: images.person1,
        message: "Thank you so much",
        time: "15:50"
    },
    {
        id: 9,
        userName: "Liam Noah",
        profile: images.person1,
        message: "Thank you so much",
        time: "Yesterday"
    },
    {
        id: 10,
        userName: "Henry",
        profile: images.person1,
        message: "Thank you so much",
        time: "2 days"
    },
]

const CarRent = [
    {
        id: 1,
        source: images.car4,
        price: "$200.00",
        rating: "5.0",
        carName: "Ranger Rover",
        fuelType: "Petrol",
        transmision: "Automatic",
    },
    {
        id: 2,
        source: images.car5,
        price: "$100.00",
        rating: "5.0",
        carName: "Mazda 3",
        fuelType: "Diesel",
        transmision: "Automatic",
    },
    {
        id: 3,
        source: images.car4,
        price: "$200.00",
        rating: "5.0",
        carName: "Ranger Rover",
        fuelType: "Petrol",
        transmision: "Automatic",
    },
    {
        id: 4,
        source: images.car5,
        price: "$100.00",
        rating: "5.0",
        carName: "Mazda 3",
        fuelType: "Diesel",
        transmision: "Automatic",
    },
   
]

const Feature =  [
    {id:1 ,icon: "android" , feature: "Android Auto"},
    {id:2 ,icon: "bluetooth" , feature: "Bluetooth"},
    {id:3 ,icon: "play" , feature: "USB input"},
    {id:4 ,icon: "android" , feature: "Apple CarPlay"},
    {id:5 ,icon: "bluetooth" , feature: "AUX input"},
    {id:6 ,icon: "play" , feature: "Backup camera"},
    {id:7 ,icon: "android" , feature: "Heated seats"},
    {id:8 ,icon: "bluetooth" , feature: "ABS"},
    {id:9 ,icon: "play" , feature: "Blind spot warning"},
  ]

  const RatingCard = [
    {
        id:1,
        source: images.profile,
        rating: 4,
        name: "Kunal",
        date: "May 12, 2023",
        text: `t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960... {'\n\n'} but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id:2,
        source: images.profile,
        rating: 4,
        name: "Kunal",
        date: "May 12, 2023",
        text: "t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960... {'\n\n'} but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id:3,
        source: images.profile,
        rating: 4,
        name: "Kunal",
        date: "May 12, 2023",
        text: "t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960... {'\n\n'} but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ]

  const TopCars = [
    {
        id: 1,
        source: images.car4,
        price: "$200.00",
        rating: "5.0",
        carName: "Ranger Rover",
        fuelType: "Petrol",
        transmision: "Automatic",
    },
    {
        id: 2,
        source: images.car5,
        price: "$100.00",
        rating: "5.0",
        carName: "Mazda 3",
        fuelType: "Diesel",
        transmision: "Automatic",
    },
    {
        id: 3,
        source: images.car4,
        price: "$200.00",
        rating: "5.0",
        carName: "Ranger Rover",
        fuelType: "Petrol",
        transmision: "Automatic",
    },
    {
        id: 4,
        source: images.car5,
        price: "$100.00",
        rating: "5.0",
        carName: "Mazda 3",
        fuelType: "Diesel",
        transmision: "Automatic",
    },
   
]

const AllCars = [
    {
        id: 1,
        source: images.car1,
        price: "$70.00",
        carName: "FORD FIESTA",
        start: "Starting From",
    },
    {
        id: 2,
        source: images.car2,
        price: "$80.00",
        carName: "Suzuki Swift",
        start: "Starting From",
    },
    {
        id: 3,
        source: images.car3,
        price: "$60.00",
        carName: "Suzuki Swift",
        start: "Starting From",
    },
    {
        id: 4,
        source: images.car1,
        price: "$70.00",
        carName: "FORD FIESTA",
        start: "Starting From",
    },
   
]


export default {
    CarList,
    Booked,
    Message,
    CarRent,
    Feature,
    RatingCard,
    TopCars,
    AllCars,
}