<template>
<!--  <header class="bg-dark-ahnshy">-->
  <header class="css-1u1c5q8 e1sgtds49">
      <div class="navbar navbar-dark shadow-sm css-fbwz4i">
        <div class="css-fbwz4i e1sgtds48" id="navbarHeader">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <svg width="132" height="28" viewBox="0 0 132 28">
            <g fill="none" fill-rule="evenodd">
            <path fill="#FFCD00" d="M8.888 6.542l1.894 1.382-4.655 5.905 5.39 6.542-1.866 1.464-6.365-7.874 5.602-7.42zm28.773 0l1.893 1.383-4.653 5.904 5.39 6.542-1.867 1.464-6.363-7.874 5.6-7.42zm25.313.132c1.998 0 3.568.656 4.707 1.968 1.14 1.312 1.71 3.192 1.71 5.639 0 2.41-.564 4.264-1.697 5.559-1.13 1.294-2.705 1.94-4.72 1.94-1.998 0-3.567-.646-4.706-1.94-1.14-1.295-1.71-3.148-1.71-5.559 0-2.447.573-4.327 1.722-5.639 1.148-1.312 2.714-1.968 4.694-1.968zm-43.608-.027c3.402 0 5.102 1.836 5.102 5.506v9.309H22.68l-.29-1.596c-.718.586-1.485 1.037-2.3 1.357-.815.32-1.59.478-2.328.478-1.28 0-2.283-.368-3.01-1.104-.727-.736-1.092-1.75-1.092-3.044 0-1.472.486-2.594 1.46-3.365.972-.771 2.388-1.157 4.246-1.157h2.788V12.1c0-2.252-.982-3.378-2.945-3.378-.63 0-1.292.09-1.985.267-.693.176-1.328.399-1.907.664l-.71-1.728c.719-.408 1.494-.723 2.328-.945.832-.22 1.644-.333 2.431-.333zm28.774 0c3.4 0 5.101 1.836 5.101 5.506v9.309h-1.789l-.289-1.596c-.719.586-1.484 1.037-2.3 1.357-.816.32-1.591.478-2.327.478-1.281 0-2.284-.368-3.012-1.104-.727-.736-1.09-1.75-1.09-3.044 0-1.472.486-2.594 1.459-3.365.973-.771 2.387-1.157 4.247-1.157h2.787V12.1c0-2.252-.98-3.378-2.944-3.378-.633 0-1.293.09-1.986.267-.694.176-1.33.399-1.906.664l-.71-1.728c.719-.408 1.494-.723 2.326-.945.832-.22 1.643-.333 2.433-.333zM31.192.371v21.09h-2.419V.904l2.42-.532zM2.418.37v21.09H0V.903L2.418.37zm60.556 8.271c-1.261 0-2.23.479-2.905 1.436-.676.957-1.013 2.359-1.013 4.203 0 1.826.337 3.205 1.013 4.135.675.931 1.644 1.397 2.905 1.397 1.28 0 2.257-.466 2.933-1.397.674-.93 1.012-2.309 1.012-4.135 0-1.844-.338-3.246-1.012-4.203-.676-.957-1.653-1.436-2.933-1.436zm-40.82 6.038H19.64c-1.274 0-2.204.222-2.789.665-.584.443-.877 1.144-.877 2.101 0 1.525.742 2.287 2.226 2.287.332 0 .676-.043 1.034-.132.357-.09.716-.204 1.074-.346.358-.142.694-.315 1.008-.518.315-.205.594-.422.838-.653V14.68zm28.773 0h-2.513c-1.275 0-2.205.222-2.789.665-.586.443-.877 1.144-.877 2.101 0 1.525.742 2.287 2.226 2.287.33 0 .677-.043 1.034-.132.357-.09.716-.204 1.074-.346.357-.142.693-.315 1.007-.518.314-.205.593-.422.838-.653V14.68z" transform="translate(-80.000000, -33.000000) translate(80.000000, 33.000000)"></path><path fill="#FFF" d="M106.97 6.187l3.65 1.055-4.534 12.596c-1.327 3.69-3.014 6.27-5.336 7.77l-2.295-2.11c1.576-1.387 2.516-2.469 3.373-4.05L96.685 7.213l3.678-.999 3.318 11.515 3.29-11.543zm-28.094.11c1.798 0 3.374.362 4.978 1.111L82.83 10.1c-.967-.528-2.46-.889-3.622-.889-1.382 0-2.157.611-2.157 1.527 0 .804.803 1.304 2.904 2.025 3.014 1.055 4.064 2.247 4.064 4.384 0 2.969-1.908 4.634-5.64 4.634-1.687 0-3.733-.39-5.364-1.055l.747-2.885c1.465.554 3.069.97 4.59.97 1.548 0 2.1-.527 2.1-1.387s-.387-1.276-2.875-2.136c-2.986-1.027-4.065-2.081-4.065-4.523 0-2.636 2.157-4.467 5.364-4.467zm12.361-3.3v3.745h4.369v2.802h-4.369v6.354c0 2.275.58 2.692 1.66 2.692.745 0 1.575-.195 2.404-.5l.857 2.608c-.774.5-2.516 1.082-4.257 1.082-3.07 0-4.424-1.886-4.424-5.632V9.544h-2.323V7.02l2.323-.278V3.801l3.76-.804zm34.372 3.301c3.898 0 6.082 2.636 6.082 7.297 0 .638-.083 1.332-.138 1.665h-8.71c.112 2.303 1.383 3.552 4.01 3.552 1.05 0 2.71-.334 3.705-.805l.83 2.525c-1.19.694-3.374 1.248-5.005 1.248-4.894 0-7.3-2.663-7.3-7.74 0-4.884 2.517-7.742 6.526-7.742zM116.345 0v21.364h-3.705V.666L116.345 0zm9.153 9.1c-1.686 0-2.627 1.332-2.682 3.635h5.281c0-2.497-.774-3.634-2.599-3.634z" transform="translate(-80.000000, -33.000000) translate(80.000000, 33.000000)">
          </path>
            </g>
          </svg>
        </router-link>
        <nav class="nav" v-if="width >= MaxWidth">
          <ul>
            <li class="css-38g87j e1sgtds44"><a href="#">회사소개</a></li>
            <li class="css-38g87j e1sgtds44"@mouseover="showMenu" @mouseleave="hideMenu">
                <div class="user-menu">
                <a href="#">서비스</a>
                </div>
            </li>
            <li class="css-38g87j e1sgtds44"><a href="https://career.kakaostyle.com/" target='_blank'>인재영입</a>
            </li>
          </ul>
        </nav>
<!--          <button v-if="width < 860" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">-->
          <button v-if="width < MaxWidth" class="css-1pvctaa" type="button" data-bs-toggle="collapse"  aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    <div class="css-3i7lk7 e1sgtds43" v-if="isMenuVisible === true" @mouseover="showMenu" @mouseleave="hideMenu">
      <ul class="css-nklyr9 e1sgtds42">
        <li class="css-1r5gb7q e1sgtds41"><a href="https://zigzag.kr/" target="_blank" class="css-1biuvyf e1sgtds40">지그재그</a></li>
        <li class="css-1r5gb7q e1sgtds41"><a href="https://fashionbykakao.com/" target="_blank" class="css-1biuvyf e1sgtds40">패션 by Kakao</a></li>
        <li class="css-1r5gb7q e1sgtds41"><a href="https://posty.kr/" target="_blank" class="css-1biuvyf e1sgtds40">포스티</a></li></ul>
    </div>
<!--    팝업-->
<!--    <div class="Collapsed" v-if="isMenuVisible">-->
<!--      <div class="container" >-->
<!--        <div class="row">-->
<!--          <div class="nav-submenu">-->
<!--            <nav class="nav">-->
<!--              <ul class="css-nklyr9 e1sgtds42">-->
<!--                <li class="css-1r5gb7q e1sgtds41"><a href="https://zigzag.kr/" target="_blank" class="css-1biuvyf e1sgtds40">지그재그</a></li>-->
<!--                <li class="css-1r5gb7q e1sgtds41"><a href="https://fashionbykakao.com/" target="_blank" class="css-1biuvyf e1sgtds40">패션 By kakao</a></li>-->
<!--                  <li class="css-1r5gb7q e1sgtds41"><a href="https://posty.kr/" target="_blank" class="css-1biuvyf e1sgtds40">포스티</a></li>-->
<!--              </ul>-->
<!--              </nav>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--  </div>-->
    <!-- End    팝업-->

  </header>
  </template>
<!--  <header class="css-1u1c5q8 e1sgtds49">-->
<!--    <div class="css-fbwz4i e1sgtds48">-->
<!--      <a class="css-8e5st5 e1sgtds47">-->
<!--        <svg width="132" height="28" viewBox="0 0 132 28">-->
<!--          <g fill="none" fill-rule="evenodd"><g><g><g>-->
<!--            <path fill="#FFCD00" d="M8.888 6.542l1.894 1.382-4.655 5.905 5.39 6.542-1.866 1.464-6.365-7.874 5.602-7.42zm28.773 0l1.893 1.383-4.653 5.904 5.39 6.542-1.867 1.464-6.363-7.874 5.6-7.42zm25.313.132c1.998 0 3.568.656 4.707 1.968 1.14 1.312 1.71 3.192 1.71 5.639 0 2.41-.564 4.264-1.697 5.559-1.13 1.294-2.705 1.94-4.72 1.94-1.998 0-3.567-.646-4.706-1.94-1.14-1.295-1.71-3.148-1.71-5.559 0-2.447.573-4.327 1.722-5.639 1.148-1.312 2.714-1.968 4.694-1.968zm-43.608-.027c3.402 0 5.102 1.836 5.102 5.506v9.309H22.68l-.29-1.596c-.718.586-1.485 1.037-2.3 1.357-.815.32-1.59.478-2.328.478-1.28 0-2.283-.368-3.01-1.104-.727-.736-1.092-1.75-1.092-3.044 0-1.472.486-2.594 1.46-3.365.972-.771 2.388-1.157 4.246-1.157h2.788V12.1c0-2.252-.982-3.378-2.945-3.378-.63 0-1.292.09-1.985.267-.693.176-1.328.399-1.907.664l-.71-1.728c.719-.408 1.494-.723 2.328-.945.832-.22 1.644-.333 2.431-.333zm28.774 0c3.4 0 5.101 1.836 5.101 5.506v9.309h-1.789l-.289-1.596c-.719.586-1.484 1.037-2.3 1.357-.816.32-1.591.478-2.327.478-1.281 0-2.284-.368-3.012-1.104-.727-.736-1.09-1.75-1.09-3.044 0-1.472.486-2.594 1.459-3.365.973-.771 2.387-1.157 4.247-1.157h2.787V12.1c0-2.252-.98-3.378-2.944-3.378-.633 0-1.293.09-1.986.267-.694.176-1.33.399-1.906.664l-.71-1.728c.719-.408 1.494-.723 2.326-.945.832-.22 1.643-.333 2.433-.333zM31.192.371v21.09h-2.419V.904l2.42-.532zM2.418.37v21.09H0V.903L2.418.37zm60.556 8.271c-1.261 0-2.23.479-2.905 1.436-.676.957-1.013 2.359-1.013 4.203 0 1.826.337 3.205 1.013 4.135.675.931 1.644 1.397 2.905 1.397 1.28 0 2.257-.466 2.933-1.397.674-.93 1.012-2.309 1.012-4.135 0-1.844-.338-3.246-1.012-4.203-.676-.957-1.653-1.436-2.933-1.436zm-40.82 6.038H19.64c-1.274 0-2.204.222-2.789.665-.584.443-.877 1.144-.877 2.101 0 1.525.742 2.287 2.226 2.287.332 0 .676-.043 1.034-.132.357-.09.716-.204 1.074-.346.358-.142.694-.315 1.008-.518.315-.205.594-.422.838-.653V14.68zm28.773 0h-2.513c-1.275 0-2.205.222-2.789.665-.586.443-.877 1.144-.877 2.101 0 1.525.742 2.287 2.226 2.287.33 0 .677-.043 1.034-.132.357-.09.716-.204 1.074-.346.357-.142.693-.315 1.007-.518.314-.205.593-.422.838-.653V14.68z" transform="translate(-80.000000, -33.000000) translate(80.000000, 33.000000)"></path><path fill="#FFF" d="M106.97 6.187l3.65 1.055-4.534 12.596c-1.327 3.69-3.014 6.27-5.336 7.77l-2.295-2.11c1.576-1.387 2.516-2.469 3.373-4.05L96.685 7.213l3.678-.999 3.318 11.515 3.29-11.543zm-28.094.11c1.798 0 3.374.362 4.978 1.111L82.83 10.1c-.967-.528-2.46-.889-3.622-.889-1.382 0-2.157.611-2.157 1.527 0 .804.803 1.304 2.904 2.025 3.014 1.055 4.064 2.247 4.064 4.384 0 2.969-1.908 4.634-5.64 4.634-1.687 0-3.733-.39-5.364-1.055l.747-2.885c1.465.554 3.069.97 4.59.97 1.548 0 2.1-.527 2.1-1.387s-.387-1.276-2.875-2.136c-2.986-1.027-4.065-2.081-4.065-4.523 0-2.636 2.157-4.467 5.364-4.467zm12.361-3.3v3.745h4.369v2.802h-4.369v6.354c0 2.275.58 2.692 1.66 2.692.745 0 1.575-.195 2.404-.5l.857 2.608c-.774.5-2.516 1.082-4.257 1.082-3.07 0-4.424-1.886-4.424-5.632V9.544h-2.323V7.02l2.323-.278V3.801l3.76-.804zm34.372 3.301c3.898 0 6.082 2.636 6.082 7.297 0 .638-.083 1.332-.138 1.665h-8.71c.112 2.303 1.383 3.552 4.01 3.552 1.05 0 2.71-.334 3.705-.805l.83 2.525c-1.19.694-3.374 1.248-5.005 1.248-4.894 0-7.3-2.663-7.3-7.74 0-4.884 2.517-7.742 6.526-7.742zM116.345 0v21.364h-3.705V.666L116.345 0zm9.153 9.1c-1.686 0-2.627 1.332-2.682 3.635h5.281c0-2.497-.774-3.634-2.599-3.634z" transform="translate(-80.000000, -33.000000) translate(80.000000, 33.000000)"></path></g></g></g></g></svg></a><button type="button" class="css-1pvctaa e1sgtds46"><svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">-->
<!--      </path>-->
<!--    </svg>-->
<!--    </button>-->
<!--    </div>-->
<!--    <div class="css-179sjci e1sgtds43">-->
<!--    <ul class="css-nklyr9 e1sgtds42">-->
<!--    <li class="css-1r5gb7q e1sgtds41"><a href="#" target="_self" class="css-1biuvyf e1sgtds40">회사 소개</a></li>-->
<!--    <li class="css-1r5gb7q e1sgtds41">-->
<!--    <a href="#service_list" target="_self" class="css-1biuvyf e1sgtds40">서비스</a></li>-->
<!--    <li class="css-1r5gb7q e1sgtds41"><a href="https://career.kakaostyle.com" target="_blank" class="css-1biuvyf e1sgtds40">인재 영입</a></li></ul></div>-->
<!--  </header>-->
<!--</template>-->

<script>
import { useWindowSize } from '@vueuse/core'
import {ref} from "vue";
export default {
  name: 'Header',
  setup: function () {

    let isMenuVisible = ref(false);

    const MaxWidth = ref(740);
    const { width } = useWindowSize();

    // const showMenu = () => {
    //   this.isMenuVisible = true;
    //   console.log(this.isMenuVisible);
    //   alert(this.isMenuVisible);
    // }

    // const hideMenu = () => {
    //   this.isMenuVisible = false;
    //   console.log(this.isMenuVisible);
    //   alert(this.isMenuVisible);
    // }

    function toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }

    function showMenu() {
      this.isMenuVisible = true;
      console.log(this.isMenuVisible);
    }

    function callbackHideMenu() {
      this.isMenuVisible = ref(false);
      //alert(this.isMenuVisible);
      console.log("callbackHideMenu");
      console.log(this.isMenuVisible);
    }

    function hideMenu() {
      // if (this.isMenuVisible) {
      //   setTimeout(callbackHideMenu, 300);
      // }
      // else {
      // }

      //setTimeout(callbackHideMenu, 200);

      this.isMenuVisible = false;
      //console.log(this.isMenuVisible);
    }

    return {MaxWidth, width, isMenuVisible, showMenu, hideMenu, toggleMenu, callbackHideMenu}
  }
}
</script>

<style scoped>
header ul li a {
  cursor: pointer;
}

header .navbar .cart {
  margin-left: auto;
  color: #fff;
}

.nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav li {
  margin: 0 20px;
}

.nav a:hover {
  text-decoration: none;
  color: #ffcd00;
}

.nav a {
  text-decoration: none;
  color: #FFFFFF;
}

.user-menu {
  position: relative;
}

.user-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

#181818

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: red;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menu .menu-item {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
}

.dropdown-menu .menu-item:hover {
  background-color: #FFFFFF;
}

.user-menu:hover .dropdown-menu {
  display: block;
}

.nav-submenu {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 95px;
  width: 100%;
  max-width: 1096px;
  text-align: right;
}

.css-38g87j {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: KakaoBig;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
  padding: 0 30px;
  margin: 0;
  cursor: pointer;
  height: 89px;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

@media (max-width: 700px) {
  .css-fbwz4i {
    height: 64px;
  }
}

.css-1pvctaa {
  background: none;
  border: 0px;
  cursor: pointer;
  appearance: none;
  outline: none;
  margin-right: 14px;
  color: rgb(255, 0, 0);
  width: 50px;
  height: 50px;
  font-size: 25px;
  padding-top: 5px;
  box-sizing: border-box;
}

button {
  appearance: auto;
  font-style: ;
  font-variant-ligatures: ;
  font-variant-caps: ;
  font-variant-numeric: ;
  font-variant-east-asian: ;
  font-variant-alternates: ;
  font-variant-position: ;
  font-weight: ;
  font-stretch: ;
  font-size: ;
  font-family: ;
  font-optical-sizing: ;
  font-size-adjust: ;
  font-kerning: ;
  font-feature-settings: ;
  font-variation-settings: ;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: buttonface;
  margin: 0em;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}

.css-38g87j {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: KakaoBig;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
  padding: 0 30px;
  margin: 0;
  cursor: pointer;
  height: 89px;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}
.css-tk5th9 {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 89px;
}

.bg-dark-ahnshy {
  background-color: #181818;
}

.css-fbwz4i {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 89px;
  width: 100%;
  max-width: 1116px;
  padding: 0 0 0 30px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin: 0 auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  z-index: 999;
  box-sizing: border-box;
}

.css-38g87j {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: KakaoBig;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
  padding: 0 30px;
  margin: 0;
  cursor: pointer;
  height: 89px;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.css-tk5th9 {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 89px;
}

.css-1u1c5q8 {
  position: relative;
  background-color: #181818;
}

.css-nklyr9 {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 85px;
  width: 100%;
  max-width: 1096px;
  text-align: right;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

.css-3i7lk7 {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 500;
  width: 100%;
  padding: 0px 50px;
  opacity: 0.65;
  background-blend-mode: multiply;
  background-image: linear-gradient(rgb(242, 242, 242), rgb(242, 242, 242));
  position: absolute;
  top: 89px;
  left: 0px;
  height: 85px;
  max-height: 85px;
  transition: max-height 0.2s;
  overflow: hidden;
  box-sizing: border-box;
}

.css-1biuvyf, .css-1biuvyf:hover, .css-1biuvyf:active {
  cursor: pointer;
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.css-1biuvyf {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: KakaoBig;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-align: center;
  color: #686868;
  padding: 0 30px;
  margin: 0;
  cursor: pointer;
  height: 85px;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

li {
  text-align: -webkit-match-parent;
}

.css-1r5gb7q {
  display: inline-block;

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
  }
}

</style>
