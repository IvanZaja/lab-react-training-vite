import "./App.css";
import IdCard from "./components/id-card/IdCard.jsx"
import Greetings from "./components/greetings/Greetings.jsx";
import Random from "./components/random/Random.jsx";
import BoxColor from "./components/box-color/BoxColor.jsx";
import CreditCard from "./components/credit-card/CreditCard.jsx";
import Rating from "./components/rating/Rating.jsx";
import DriverCard from "./components/driver-card/DriverCard.jsx";
import LikeButton from "./components/like-button/LikeButton.jsx";
import ClickablePicture from "./components/clickable-picture/ClickablePicture.jsx";
import Dice from "./components/dice/Dice.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import NumbersTable from "./components/numbers-table/NumbersTable.jsx";
import FaceBook from "./components/facebook/FaceBook.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores ' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg"/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className="creditCardsApp">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>      

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      <LikeButton />

      <ClickablePicture
        img="src\assets\images\me.jpg"
        imgClicked="src\assets\images\me-glasses.jpg"
      />
      <Dice />

      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />
      <NumbersTable limit={12} />

      <FaceBook />
    </div>
  );
}

export default App;
