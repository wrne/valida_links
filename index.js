import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
	const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.\/]*.[^\s]*)\)/gm;
	const capturas = [...texto.matchAll(regex)]; // O spread "espalha" o conteudo.
	// const capturas = regex.exec(texto);
	// console.log(capturas);
	
	// Obs 1: Para definir uma posição do array como chave do objeto, usamos colchetes em volta dele
	// Obs 2: Para indicar ao js que as chaves retornar são referentes a um objeto e não "chaves" delimitadoras de uma função, englobamos o objeto com parenteses:
	const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] })) 

	console.log(resultados);
	return resultados;
}


function trataErro(error) {

	console.log(chalk.yellow(error));

}

async function pegaArquivo(caminhoDoArquivo) {

	try {

		const encoding = 'utf-8';
		const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);

		
		console.log(extraiLinks(texto));


	} catch (error) {
		trataErro(error)
	}

}

console.log(chalk.green("olá mundo verde!"));
console.log(chalk.blue("olá mundo azul!"));
console.log(chalk.red("olá mundo vermelho!"));

pegaArquivo('./arquivos/texto.md')


// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.\/].[^\s]\)

// Com grupos:
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.\/]*.[^\s]*)\) 
