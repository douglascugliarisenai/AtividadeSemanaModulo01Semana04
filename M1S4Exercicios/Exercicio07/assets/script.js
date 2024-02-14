function validarHorario() {
  let dataSelecionada = document.getElementById("hora-cons").value;
  if (dataSelecionada >= "06:00" && dataSelecionada <= "12:00") {
    console.log("Bom dia!!");
  } else if (dataSelecionada >= "12:01" && dataSelecionada <= "18:00") {
    console.log("Bom Tarde!!");
  } else if (dataSelecionada >= "18:01" && dataSelecionada <= "24:00") {
    console.log("Bom Noite!!");
  } else {
    console.log("Boa madrugada!!");
  }
}

mensagem(dataSelecionada);
