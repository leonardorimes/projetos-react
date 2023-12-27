const Form = () => {
  return (
    <form>
      <div>
        <label> Nome: </label>
        <input type="text" placeholder="Digite o seu nome: " />
      </div>
      <div>
        <label> E-mail: </label>
        <input type="email" placeholder="Insira o seu melhor e-mail" />
      </div>
      <div>
        <a href="#">Leia os termos</a>
        <div>
          <input type="checkbox" />
          <label>Concordo com os termos </label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
