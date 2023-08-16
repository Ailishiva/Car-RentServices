// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:"The US-spec Model 3 is offered with three electric powertrain options: Standard Plus, Long Range, and Performance. While the former gets a rear-wheel drivetrain and has a claimed range of 423km, the Long Range and Performance variants come with a dual-motor all-wheel-drive setup and deliver a claimed range of 568km and 507km respectively. The Performance variant, on the other hand, can do the 0-97kmph sprint in just 3.1 seconds with a top speed of 261kmph. Tesla could offer the India-spec Model 3 with the Standard Plus and Long Range variants at first while the Performance variant could be launched later."
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Toyota Aventador Hyryder boasts an attractive exterior with split LED headlamps, gloss-black grille, honeycomb air dam, contrast-coloured front skid plate, black roof, dual-tone alloy wheels, and C-shaped LED tail lamps. It comes in seven single-tone and four dual-tone colour options, including Sporting Red, Speedy Blue, Enticing Silver, Cafe White, Gaming Grey, Cave Black, and Midnight Black."

  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The BMW X3 is a compact luxury crossover SUV that embodies a perfect blend of style, performance, and cutting-edge technology. With its sporty design and premium materials, the X3 offers a sophisticated yet dynamic appearance. Inside, the vehicle accommodates five passengers in a comfortable and elegantly appointed cabin, featuring top-notch materials and a range of modern technology interfaces. Under the hood, the X3 typically boasts a lineup of turbocharged engines, delivering both power and efficiency. Renowned for its balanced handling and sporty driving dynamics, the X3 provides different driving modes to adapt to varying preferences and road conditions"
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "At the heart of the Murciélago lies a formidable V12 engine, whose potency varies across different model years. The engine's symphony of power is matched only by its impressive acceleration, rendering the 0 to 60 mph sprint a breathtaking feat that takes just seconds. With top speeds soaring beyond 200 mph, the Murciélago's performance credentials remain undeniable.Inside the cabin, the Murciélago strikes a balance between luxury and performance. Lavish materials such as leather and carbon fiber adorn the interior, creating an ambiance that caters to both comfort and driving engagement. While featuring elements of infotainment and convenience, the Murciélago's core focus lies in delivering an unparalleled driving experience that exhilarates the senses and pushes the boundaries of automotive excellence."

  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "Ferrari is renowned for crafting some of the world's most sought-after and high-performance sports cars. These vehicles are characterized by their cutting-edge technology, powerful engines, and exceptional design. Ferrari models often feature advanced aerodynamics, lightweight materials, and exquisite craftsmanship. They're known for their incredible acceleration, top speeds, and precise handling. Some popular Ferrari models include the Ferrari 488, Ferrari F8 Tributo, and the iconic Ferrari 812 Superfast."
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "Mercedes-Benz, commonly referred to as Mercedes, stands as a pinnacle of German luxury automobile craftsmanship with a storied heritage dating back to Karl Benz's invention of the first gasoline-powered car in 1886. Renowned for its commitment to innovation, opulence, and engineering excellence, Mercedes-Benz offers a diverse range of vehicles encompassing sedans, SUVs, coupes, convertibles, and high-performance models. Notably, the flagship S-Class exemplifies the brand's avant-garde technologies, luxurious interiors, and advanced safety features, while the E-Class strikes a balance between luxury and performance in the midsize segment. The accessible yet stylish C-Class caters to a broader audience, and the SUV lineup, comprising models like the GLC, GLE, and GLS, meets various size and luxury preferences. Under the Mercedes-AMG banner, high-performance enthusiasts find vehicles finely tuned for exhilarating driving experiences."
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "Audi, a prominent German automaker, is recognized globally for its commitment to sophistication, performance, and technological advancement. With a legacy rooted in precision engineering, Audi offers an extensive range of vehicles that exemplify luxury and innovation. From sleek sedans to dynamic SUVs, each Audi model showcases meticulous craftsmanship and cutting-edge features. The iconic Audi A4, A6, and A8 sedans embody refined elegance, blending opulent interiors with state-of-the-art infotainment and driver assistance technologies."
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "Rolls-Royce, the pinnacle of British luxury automotive craftsmanship, is renowned worldwide for its unwavering dedication to opulence, craftsmanship, and exclusivity. A marque steeped in tradition, Rolls-Royce produces a distinguished range of handcrafted vehicles that epitomize elegance and refinement. From the stately Phantom to the graceful Ghost and the commanding Cullinan SUV, each model is a testament to meticulous attention to detail and the highest quality materials. The interiors of Rolls-Royce vehicles are sanctuaries of comfort, adorned with sumptuous leather, finely crafted woodwork, and cutting-edge technology seamlessly integrated to enhance the driving experience. With the Spirit of Ecstasy emblem gracing the iconic front grille, a Rolls-Royce embodies a rare combination of heritage and modernity. The brand's commitment to delivering personalized luxury is exemplified through the Bespoke program, allowing customers to customize their vehicles according to their individual tastes and desires. "
  },
];

export default carData;
