import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import Nav from './Nav';
import Toggle from './Toggle';

import Card from './Card';

function App() {
  return (
    <>
    <div className="row">
      <div className="col-1">
      <Toggle />
      </div>
      <div className="col-10">
        <div className="row">
        <Nav />
        </div>
      <div className="row mt-5">
        <div className="col-3">
          <Card para='4-Year Medical Doctor (MD) Degreee in UK' channel='AUC school of Medical' year='7 Years Ago' link='https://www.youtube.com/embed/JmMyo4F5i64?si=-gCEFZnUnSnggSy8' />
        </div>
        <div className="col-3">
          <Card para='அதிர்ச்சி Dance-ல செஞ்சிட்டான் 🥳🔥| Kovai Virundhu Ep- 6 ' channel='Vj Siddhu Vlogs' year='2 hours Ago' link='https://www.youtube.com/embed/SQ3nIQKKSqI?si=bX-HC8ZNkAKn9XVM' />
        </div>
        <div className="col-3">
          <Card para='My Wife Shocked Me At CWC |Family Round Vlog' channel=' Irfans View ❤️' year='2 hours Ago' link='https://www.youtube.com/embed/FZGUqCLBuV0?si=wCjcqag2-4STRAKH' />
        </div>
        <div className="col-3">
          <Card para='Cooku With Comali Season 4 | Full Episode | Episode 24' channel='Vijay Television' year='5 months Ago' link='https://www.youtube.com/embed/E_4IFeskwlg?si=3KYa08k0B-Nfw_3k' />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3">
          <Card para='Maragadha Naanayam - Tamil Thriller Full Movie - Mime Gopi, Mime Gopi, Daniel Annie Pope' channel='Zee Thirai' year='3 weeks Ago' link='https://www.youtube.com/embed/rpzT_i8dTFk?si=dZcoVkg7AvUtBYla' />
        </div>
        <div className="col-3">
          <Card para='4-Year Medical Doctor (MD) Degreee in UK' channel='AUC school of Medical' year='7 Years Ago' link='https://www.youtube.com/embed/z5QRk9I2Zw8?si=CdTVHQCtV3BVegLR' />
        </div>
        <div className="col-3">
          <Card para='4-Year Medical Doctor (MD) Degreee in UK' channel='AUC school of Medical' year='7 Years Ago' link='https://www.youtube.com/embed/_GcJ2o-bXJw?si=3w6YWmvSVJpAWDK6' />
        </div>
        <div className="col-3">
          <Card para='4-Year Medical Doctor (MD) Degreee in UK' channel='AUC school of Medical' year='7 Years Ago' link='https://www.youtube.com/embed/SlSZHJDgVK4?si=h8v7245cWKfGoSda' />
        </div>
      </div>
      </div>
    </div>
   
    
    </>
  );
}

export default App;
