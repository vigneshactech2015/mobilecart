import classes from './AvailablePhones.module.css';

import PhoneItem from './PhoneItem/PhoneItem';
const DUMMY_PHONES = [

    {
      id: 'm1',
      image:"./Assets/iphone.jpg",
      name: 'iphone-13',
      price: 1224.99,
    },
    {
      id: 'm2',
      image: "./Assets/samsungs21.jpg",
      name: 'Samsung s21 ',
      price: 1000.5,
    },
    {
      id: 'm3',
      image:"./Assets/asus.jpg" ,
      name: 'Asus',
      price: 770.99,
    },
    {
      id: 'm4',
      image:"./Assets/moto.jpg" ,
      name: 'Moto',
      price: 888.99,
    },
    {
      id: 'm5',
      image:"./Assets/sony.jpg" ,
      name: 'Sony',
      price: 800.00,
    },
    {
      id: 'm6',
      image:"./Assets/vivo.jpg" ,
      name: 'Vivo',
      price: 888.99,
    },
    {
      id: 'm7',
      image:"./Assets/redmi.jpg" ,
      name: 'Redmi',
      price: 805.99,
    },
    {
      id: 'm8',
      image:"./Assets/realme.jpg" ,
      name: 'Realme',
      price: 700.99,
    },
  ];


const AvailablePhones=()=>{

    const phonesList=DUMMY_PHONES.map((phone)=>(<PhoneItem 
        key={phone.id}
        id={phone.id}
        image={phone.image}
        name={phone.name}
        price={phone.price}/>))
    return <section className={classes.phones}>
        <div>
        <div className={classes.display}>
            {phonesList}
        </div>
        </div>
    </section>
};

export default AvailablePhones;