var TaCerto = TaCerto || {};
TaCerto.Controladora = TaCerto.Controladora || {};
TaCerto.Controladora.MenuConquistas = {
	model:{
		timeOutSnackBar: undefined
	},
	load: function(){
		TaCerto.Controladora.CarregarPagina.htmlCorpo("menuConquistas",["dica"],["dica"]);
		this.loadAchievements();
	},
	callGame: function(tipo, el){
		TaCerto.GenFunc.fadeInBtnClick(el,
		function(){
			TaCerto.Controladora.Jogo.Load(tipo);
		});
	},
	homeBtn: function (el) {
		TaCerto.GenFunc.fadeInBtnClick(el,
		function(){
			TaCerto.Controladora.MenuInicial.load();
		});
	},
	loadAchievements: function (){
		var numAchiev = TaCerto.Estrutura.Conquistas.lengthConquista();
		var achievs = TaCerto.Estrutura.Conquistas.conquistas;
		
		var tabelaConquistas = document.getElementById('telaConquista');

		// Apaga todos os filhos
		while(tabelaConquistas.firstChild)
			tabelaConquistas.removeChild(tabelaConquistas.firstChild);

		// Add as conquistas
		console.log(numAchiev);
		for(var i = 0; i < numAchiev; i++){
			let currentAchiev = achievs[i];
			
			if(TaCerto.Estrutura.Jogador.conquistas[i]){
				// Jogador já completou a conquista
				tabelaConquistas.innerHTML += '<li class="collection-item avatar green"><img class="imgConquista" src="resources/media/image/'+currentAchiev[3]+'.jpg" alt=""><div class="textMidConquista"><h5 class="title">'+currentAchiev[0]+'</h5><h6>'+currentAchiev[1]+'</h6></div><div class="moneyConquista"><span>'+currentAchiev[2]+'</span><img src="resources/media/image/missoes_atalho.png" alt="ilustracao dinheiro"></div></li>';
			}else{
				// Jogador ainda não completo a conquista
				tabelaConquistas.innerHTML += '<li class="collection-item avatar"><img class="imgConquista" src="resources/media/image/'+currentAchiev[3]+'.jpg" alt=""><div class="textMidConquista"><h4 class="title">'+currentAchiev[0]+'</h4><h6>'+currentAchiev[1]+'</h6></div><div class="moneyConquista"><span>'+currentAchiev[2]+'</span><img src="resources/media/image/missoes_atalho.png" alt="ilustracao dinheiro"></div></li>';
			}
		}
	},
	checkAchievements: function(){
		var acertoTotal = TaCerto.Estrutura.Jogador.totalAcertos;
		var estrelasTotal = 0;
		var moneyTotal = TaCerto.Estrutura.Jogador.moeda;
		var conquistas = TaCerto.Estrutura.Jogador.conquistas;

		console.log(TaCerto.Estrutura.Jogador.missoes[0][0] + " " + TaCerto.Estrutura.Jogador.missoes[0][1] + " " + TaCerto.Estrutura.Jogador.missoes[0][2]);

		for(var i = 0; i < 9; ++i){
			if(TaCerto.Estrutura.Jogador.missoes[i][0] && TaCerto.Estrutura.Jogador.missoes[i][1] && TaCerto.Estrutura.Jogador.missoes[i][2])
				++estrelasTotal;
		}
		console.log("numero de estrelas " + estrelasTotal);

		if(!conquistas[0]){ // Checa a conquista 0
			if(estrelasTotal >= 1){
				this.showAchievementPanel(0);				
				// Atualiza conquista obtida
				conquistas[0] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[0][2];
			}
		} 
		
		if(!conquistas[1]){ // Checa a conquista 1
			if(estrelasTotal >= 3){
				this.showAchievementPanel(1);				
				// Atualiza conquista obtida
				conquistas[1] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[1][2];
			}
		}
		
		if(!conquistas[2]){ // Checa a conquista 2
			if(estrelasTotal >= 5){
				this.showAchievementPanel(2);				
				// Atualiza conquista obtida
				conquistas[2] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[2][2];
			}
		}
		
		if(!conquistas[3]){ // Checa a conquista 3
			if(acertoTotal >= 10){
				this.showAchievementPanel(3);				
				// Atualiza conquista obtida
				conquistas[3] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[3][2];
			}
		}
		
		if(!conquistas[4]){ // Checa a conquista 4
			if(acertoTotal >= 50){
				this.showAchievementPanel(4);				
				// Atualiza conquista obtida
				conquistas[4] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[4][2];
			}
		}
		
		if(!conquistas[5]){ // Checa a conquista 5
			if(acertoTotal >= 100){
				this.showAchievementPanel(5);				
				// Atualiza conquista obtida
				conquistas[5] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[5][2];
			}
		}
		
		if(!conquistas[6]){ // Checa a conquista 6
			if(moneyTotal >= 25){
				this.showAchievementPanel(6);				
				// Atualiza conquista obtida
				conquistas[6] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[6][2];
			}
		}
		
		if(!conquistas[7]){ // Checa a conquista 7
			if(moneyTotal >= 50){
				this.showAchievementPanel(7);				
				// Atualiza conquista obtida
				conquistas[7] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[7][2];
			}
		}
		if(!conquistas[8]){ // Checa a conquista 8
			if(moneyTotal >= 100){
				this.showAchievementPanel(8);				
				// Atualiza conquista obtida
				conquistas[8] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[8][2];
			}
		}
		
		if(!conquistas[9]){ // Checa a conquista 9
			if(moneyTotal >= 1000){
				this.showAchievementPanel(9);				
				// Atualiza conquista obtida
				conquistas[9] = true;
				// Entrega prêmio
				TaCerto.Estrutura.Jogador.moeda += TaCerto.Estrutura.Conquistas.conquistas[9][2];
			}
		}
	},
	showAchievementPanel: function(id){
		
		var achievs = TaCerto.Estrutura.Conquistas.conquistas;

		if(this.model.timeOutSnackBar === undefined){
			;
		}else{
			clearTimeout(this.model.timeOutSnackBar);
		}

		console.log("Mostrar o painel da conquista " + id);
		console.log("`d`");
		var achievementPanel = document.getElementById("achievementPanel");
		var currentAchiev = achievs[id];
		achievementPanel.innerHTML = ' ';
		achievementPanel.innerHTML = '<img class="imgConquistaPanel" src="resources/media/image/'+currentAchiev[3]+'.jpg" alt=""><div class="textMidConquistaPanel"><h4 class="titlePanel">'+currentAchiev[0]+'</h4></div>';
		
		achievementPanel.classList.add("animaAchievementWrapper");
		achievementPanel.style.height = "100%"; 

		
		this.model.timeOutSnackBar = setTimeout(function(){
			achievementPanel.classList.remove("animaAchievementWrapper");
			
			setTimeout(function(){
				achievementPanel.classList.add("animaAchievementWrapper2");
				achievementPanel.style.height = "0%";

				setTimeout(function(){
					achievementPanel.classList.remove("animaAchievementWrapper2");
				
					TaCerto.Controladora.MenuConquistas.model.timeOutSnackBar = undefined;
					achievementPanel.innerHTML = ' ';
				}, 700);
			}, 10);
		}, 5000);

		
	}
};