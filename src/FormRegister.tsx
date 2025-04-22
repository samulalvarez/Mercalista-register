export function FormRegister() {
  return (
    <form className="form-register">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" />
      <br />
      <label htmlFor="telefono">Telefono:</label>
      <input type="tel" id="telefono" name="telefono" />
      <br />
      <label htmlFor="documento">Documento:</label>
      <input type="tel" id="documento" name="documento" />
      <br />
      <label htmlFor="ciudad">Ciudad:</label>
      <input type="ciudad" id="ciudad" name="ciudad" />
      <br />
      <input type="submit" value="Continuar" />
    </form>
  ) 
} 