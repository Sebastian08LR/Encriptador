<template>
    <div class="encryptor">
      <header>
        <div class="header__contenedor">
          <img class="contenedor__logo" src="../assets/img/Logo.png" alt="Logo Alura Latam">
        </div>
      </header>
      <main>
        <section class="main__form-input">
          <form @submit.prevent="handleSubmit">
            <textarea v-model="formData.chain" class="entrada-texto" cols="30" rows="10" placeholder="Ingrese el texto aquí"></textarea>
            <div class="form-input__condition">
              <div class="form-input__menssage">
                <img src="../assets/img/exclamation-circle-fill.png"> <small>Solo letras minúsculas y sin acentos</small>
              </div>
              <div class="form-input__button">
                <input type="submit" data-accion="encrypt" value="Encriptar" @click="action = 'encrypt'">
                <input type="submit" data-accion="decrypt" value="Desencriptar" @click="action = 'decrypt'">
              </div>
            </div>
          </form>
        </section>
        <section class="main__form-ouput">
          <article class="form-ouput" :class="{ active: !showOutput }">
            <img src="../assets/img/Muñeco.png">
            <h1>Ningún mensaje fue encontrado</h1>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
          </article>
          <article class="form-ouput__menssage" :class="{ active: showOutput }">
            <p>{{ outputMessage }}</p>
            <input type="button" id="copy" value="Copiar" @click="copyText">
          </article>
        </section>
      </main> 
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          chain: ''
        },
        action: '',
        outputMessage: '',
        showOutput: false
      }
    },
    methods: {
      async handleSubmit() {
        if (!this.formData.chain || !this.action) {
          alert('Por favor, ingrese un texto y seleccione una acción');
          return;
        }
  
        try {
            console.log(encodeURIComponent(this.formData.chain))
            console.log(this.action)
          const response = await fetch(`http://localhost:3000/encrypt/api/v1?text=${encodeURIComponent(this.formData.chain)}&action=${this.action}`);
          console.log(response)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.outputMessage = data.result;
          this.showOutput = true;
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          this.outputMessage = 'Hubo un error al procesar su solicitud.';
          this.showOutput = true;
        }
      },
      copyText() {
        navigator.clipboard.writeText(this.outputMessage).then(() => {
          this.outputMessage = "";
          this.showOutput = false;
        });
      }
    }
  }
  </script>
  
<style scoped>
@import url(../assets/variables.css);

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
::-webkit-scrollbar-track
{
	background-color: #D8DFE8;
    border-radius: 3px;
}

::-webkit-scrollbar
{
	width: 10px;
}

::-webkit-scrollbar-thumb
{
	background-color:  #0A3871;
    border-radius: 3px;
	border: none;
    cursor: pointer;
}

.encryptor{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: #F3F5FC;
}
header{
    /* background: red; */
    display: inline-block;
    position: absolute;
    width: 120px;
    height: 48px;
    left: 40px;
    top: 40px;
}
.header__contenedor{
    width: 100%;
    height: 100%;
}

/* .contenedor__logo{
    background: orange;
} */
main{
    /* background: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
}
.main__form-input{
    /* background: green; */
    display: flex;
    padding-top: 168px;
    padding-left: 240px;
    padding-right: 40px;
    padding-bottom: 72px;
    flex: 4;
}
.main__form-input form{
    /* background: fuchsia; */
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}
.main__form-input form textarea::-webkit-input-placeholder {
    color: var(--color-secondary);
    }
.main__form-input form textarea{
    resize: none;
    color: var(--color-secondary);
    font-family: "Inter_28pt-Regular";
    font-size: 32px;
    border: none;
    outline: none;
    background: transparent;
}
.form-input__condition{
    display: flex;
    flex-direction: column;
}
.form-input__menssage{
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}
.form-input__condition small{
    color: var(--color-tertiary);
    font-family: "Inter_18pt-Regular";
    font-size: 12px;
}
.form-input__button{
    display: flex;
    justify-content: space-between;
    gap: 24px;
}
.form-input__button input[type="submit"],
.form-ouput__menssage input[type="button"]{
    width: 100%;
    height: 67px;
    border: none;
    outline: none;
    border-radius: 24px;
    font-family: "Inter_18pt-Regular";
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #0A3871;
}
.form-input__button input[type="submit"]:first-child{
    background: #0A3871;
    color: #fff;
}
.form-input__button input[type="submit"]:last-child{
    background: #D8DFE8;
    color: #0A3871;
}
.form-ouput__menssage input[type="button"]{
    background: transparent;
}

.main__form-ouput{
     background: #F3F5FC; 
    flex: 1;
    padding: 64px 40px 40px;
}
.form-ouput, .form-ouput__menssage{
    background: #FFF;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100%;
    border-radius: 32px;
    padding: 32px;
    box-shadow: 0px 24px 32px -8px var(--bg-secondary);
}
.form-ouput__menssage{
    justify-content: space-between;
}
.form-ouput img{
    margin-bottom: 32px;
}
.form-ouput h1{
    font-size: 24px;
    /* background: red; */
    text-align: center;
    margin-bottom: 5px;
    font-family: "Inter_24pt-Bold";
}
.form-ouput p{
    font-family: "Inter_18pt-Regular";
    font-size: 16px;
    text-align: center;
}
.form-ouput__menssage p{
    color: var(--color-tertiary);
    font-family: "Inter_24pt-Regular";
    font-size: 24px;
    word-wrap: break-word;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-bottom: 15px;
}
.active{
    display: flex;
}
/* Desktop */
@media (max-width: 1277px) {
    /* body{
        background: red;
    } */
    .main__form-input{
        padding-left: 120px;
    }
}
@media (max-width: 1170px) {
    .main__form-input{
        padding-left: 40px;
    }
}

/* Table */
@media (max-width: 1087px) {
    header{
        left: 0;
    }
    main{
        flex-direction: column;
    }
    .main__form-ouput{
        padding-top: 0;
    }
    .form-ouput, .form-ouput__menssage{
        width: 100%;
    }
    .form-ouput__menssage p{
        margin-bottom: 32px;
        height: 180px;
    }
    .form-ouput img{
        display: none;
    }
}

/* Mobile */
@media (max-width: 500px) {
     body{
        background: #F3F5FC;
    } 
    header{
        top: 24px;
        left: -30px;
    }
    .main__form-input{
        padding-top: 152px;
        padding-left: 16px;
        padding-right: 16px;
    }
    .main__form-ouput{
        padding: 0 16px 16px ;
    }
    .form-input__button{
        flex-direction: column;
    }
    .form-ouput__menssage p{
        height: 432px;
    }
}
</style>