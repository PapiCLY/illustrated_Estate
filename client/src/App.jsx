import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PopularProperties from './components/popularProperties/PopularProperties';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Properties from './components/properties/Properties'; 
import PropertyDetail from './components/propertyDetail/PropertyDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <PopularProperties />
            <FeaturedProperties />
            <Newsletter />
            <Footer />
          </>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

        <Route path='/properties' element={
          <>
            <Navbar />
            <Properties />
            <Footer />
          </>
        } />
        <Route path='/propertyDetail/:id' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;

