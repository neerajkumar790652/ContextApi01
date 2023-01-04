import React, { useContext } from "react";
import ThemeContext from "../Context";
import Navbar from "./Navbar";
import "./Common.css";
const Home = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          repellendus perspiciatis consequuntur odit ducimus assumenda nihil
          voluptatem cupiditate ex, tempore eligendi voluptate nulla quae,
          beatae in voluptas eius omnis architecto a officia aperiam amet odio
          vitae voluptatum! Quibusdam cupiditate ipsam at natus deserunt impedit
          veniam dolorem incidunt a est? Necessitatibus amet vero sapiente
          placeat magni. Qui labore provident vel optio rem ex odit vero
          reiciendis voluptatem quis eveniet quas porro quidem, at omnis aliquid
          ratione voluptate repudiandae explicabo nam error dolorum laudantium
          possimus officia. Error cumque blanditiis, aliquam natus fugiat dicta
          quia eos, dolor, minus minima temporibus laudantium ipsa impedit!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus
          perspiciatis consequuntur odit ducimus assumenda nihil voluptatem
          cupiditate ex, tempore eligendi voluptate nulla quae, beatae in
          voluptas eius omnis architecto a officia aperiam amet odio vitae
          voluptatum! Quibusdam cupiditate ipsam at natus deserunt impedit
          veniam dolorem incidunt a est? Necessitatibus amet vero sapiente
          placeat magni. Qui labore provident vel optio rem ex odit vero
          reiciendis voluptatem quis eveniet quas porro quidem, at omnis aliquid
          ratione voluptate repudiandae explicabo nam error dolorum laudantium
          possimus officia. Error cumque blanditiis, aliquam natus fugiat dicta
          quia eos, dolor, minus minima temporibus laudantium ipsa impedit!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus
          perspiciatis consequuntur odit ducimus assumenda nihil voluptatem
          cupiditate ex, tempore eligendi voluptate nulla quae, beatae in
          voluptas eius omnis architecto a officia aperiam amet odio vitae
          voluptatum! Quibusdam cupiditate ipsam at natus deserunt impedit
          veniam dolorem incidunt a est? Necessitatibus amet vero sapiente
          placeat magni. Qui labore provident vel optio rem ex odit vero
          reiciendis voluptatem quis eveniet quas porro quidem, at omnis aliquid
          ratione voluptate repudiandae explicabo nam error dolorum laudantium
          possimus officia. Error cumque blanditiis, aliquam natus fugiat dicta
          quia eos, dolor, minus minima temporibus laudantium ipsa impedit!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus
          perspiciatis consequuntur odit ducimus assumenda nihil voluptatem
          cupiditate ex, tempore eligendi voluptate nulla quae, beatae in
          voluptas eius omnis architecto a officia aperiam amet odio vitae
          voluptatum! Quibusdam cupiditate ipsam at natus deserunt impedit
          veniam dolorem incidunt a est? Necessitatibus amet vero sapiente
          placeat magni. Qui labore provident vel optio rem ex odit vero
          reiciendis voluptatem quis eveniet quas porro quidem, at omnis aliquid
          ratione voluptate repudiandae explicabo nam error dolorum laudantium
          possimus officia. Error cumque blanditiis, aliquam natus fugiat dicta
          quia eos, dolor, minus minima temporibus laudantium ipsa impedit!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus
          perspiciatis consequuntur odit ducimus assumenda nihil voluptatem
          cupiditate ex, tempore eligendi voluptate nulla quae, beatae in
          voluptas eius omnis architecto a officia aperiam amet odio vitae
          voluptatum! Quibusdam cupiditate ipsam at natus deserunt impedit
          veniam dolorem incidunt a est? Necessitatibus amet vero sapiente
          placeat magni. Qui labore provident vel optio rem ex odit vero
          reiciendis voluptatem quis eveniet quas porro quidem, at omnis aliquid
          ratione voluptate repudiandae explicabo nam error dolorum laudantium
          possimus officia. Error cumque blanditiis, aliquam natus fugiat dicta
          quia eos, dolor, minus minima temporibus laudantium ipsa impedit!
        </p>
      </div>
    </>
  );
};
export default Home;
