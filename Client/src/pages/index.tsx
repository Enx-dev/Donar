import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Campaigns,
  Donate,
  Herosection,
  Stats,
  Leaderboard,
  Blog,
  Testimonials,
} from "../components/Landing";
import Layout from "../components/layout";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
export default function Home() {
  return (
    <div className="bg-light-primary App">

        <Navbar/>
        <Herosection />
        <Stats />
        <Donate />
        <Campaigns />
        <Leaderboard />
        <Blog />
        <Testimonials />
        <Footer/>
    </div>
  );
}
