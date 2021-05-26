//"site" ou "10c"
var mode = "site";

//##############################################################
//###################### Navigation ############################
//##############################################################

    //Project Name
        var projectName = "Keyscape";

        document.getElementById("projectTitle").innerHTML = projectName;
        document.getElementById("projectName").innerHTML = projectName;

    //Item Section
        var itemAbout = "Sobre";
        var itemPortfolio = "Salas";
        var itemEvents = "Eventos";
        var itemTeam = "Equipe";
        var itemProgram = "Programa";
        var itemContact = "Contato";

        document.getElementById("itemAbout").innerHTML = itemAbout;
        document.getElementById("itemPortfolio").innerHTML = itemPortfolio;
        document.getElementById("itemEvents").innerHTML = itemEvents;
        document.getElementById("itemTeam").innerHTML = itemTeam;
        document.getElementById("itemProgram").innerHTML = itemProgram;
        document.getElementById("itemContact").innerHTML = itemContact;

//##############################################################
//####################### Masthead #############################
//##############################################################

    //Project Name
        document.getElementById("projectNameMenu").innerHTML = projectName;

    //Project Description
        var description = "O <i>Escape Room</i> como forma de desenvolvimento de habilidades";
        
        if(mode == "10c")
            description = "Se você estiver <i>10conectado</i>, dê uma olhada na seção de Contato";
        
        document.getElementById("projectDescription").innerHTML = description;

//##############################################################
//######################### About ##############################
//##############################################################

    //What is a Escape Room?
        document.getElementById("titleWhatIsEscape").innerHTML = "O que é um <i>Escape Room</i>?";
        document.getElementById("whatIsEscape").innerHTML = "O <i>Escape Room</i> é uma sala no qual um grupo de participantes precisa desvendar algum mistério, num tempo pré-determinado, através da resolução de quebra-cabeças. Estes quebra-cabeças são de diversos tipos, e estão espalhados pela sala, misturados com outros itens que fazem parte da história criada para um determinado evento.";

    //Who are we?
        document.getElementById("titleWhoAreWe").innerHTML = "Quem somos nós?";
        document.getElementById("whoAreWe").innerHTML = "O projeto faz a criação e apresentação de <i>Escape Rooms</i>, e é desenvolvido por alunos e professores da Universidade Tecnológica Federal do Paraná (UTFPR), câmpus Cornélio Procópio.";

//##############################################################
//####################### Portfolio ############################
//##############################################################

    //Description of the Rooms

        //Amálgama
            document.getElementById("roomAmalgama").title = "Na sala \"Amálgama\", quatro diferentes mundos magicamente se chocam, e os participantes devem se unir para desvendar os mistérios, encontrar sete esferas místicas e devolver a paz em meio ao caos que foi criado.";
            document.getElementById("themeAmalgama").innerHTML = "";
            document.getElementById("nameAmalgama").innerHTML = "Amálgama";

        //Amarelos
            document.getElementById("roomAmarelos").title = "Na sala \"Amarelos\", um grupo de viajantes do tempo precisa descobrir um importante mistério que pode mudar a história.";
            document.getElementById("themeAmarelos").innerHTML = "";
            document.getElementById("nameAmarelos").innerHTML = "Amarelos";

        //Missing
            document.getElementById("roomMissing").title = "Na sala \"Missing\", um rapaz foge de casa, e os participantes precisam descobrir o porquê, e para onde ele foi.";
            document.getElementById("themeMissing").innerHTML = "";
            document.getElementById("nameMissing").innerHTML = "<i>Missing</i>";

        //Quarentena
            document.getElementById("roomQuarentena").title = "Na sala \"Quarentena\", um grupo de pesquisadores precisa encontrar um antídoto para uma infecção que já pode ter atacado um deles.";
            document.getElementById("themeQuarentena").innerHTML = "";
            document.getElementById("nameQuarentena").innerHTML = "Quarentena";

        //10c
            document.getElementById("room10c").title = "Na sala \"10Conectados\", um grupo, de maneira online, deve investigar as causas que lavaram uma Inteligência Artificial a apresentar problemas.";
            document.getElementById("theme10c").innerHTML = "";
            document.getElementById("name10c").innerHTML = "10Conectados";

        //Future
            document.getElementById("roomFuture").title = "Na futura sala presencial, o grupo se encontrará em um local totalmente ambientado com temas relacionados ao terror.";
            document.getElementById("themeFuture").innerHTML = "";
            document.getElementById("nameFuture").innerHTML = "Futura Sala Presencial";

//##############################################################
//######################## Events ##############################
//##############################################################

    //Section Name
        document.getElementById("eventsSection").innerHTML = itemEvents;

    //Events Content
        var eventsInfo = [],
            eventsText = "";

        /*
        //Event #1
            eventsInfo.push({day: "",    //Exemplo: "DD/MM"
                            local: "",  //Exemplo: "UTFPR-CP"
                            time: "",   //Exemplo: "13h às 18h"
                            room: ""}); //Exemplo: "Quarentena"
        */

        if(eventsInfo.length == 0){
            eventsText += "<div class=\"col-lg-6 col-md-8 text-center\"><h2 class=\"text-uppercase text-gray\">";
            eventsText += "Não há eventos programados.";
            eventsText += "</h2></div>";
        }

        for(events in eventsInfo){
            eventsText += "<div class=\"col-lg-4 col-md-12 mb-4 mb-lg-0 text-center\"><div><h2 class=\"section-heading text-black\" style=\"font-size: 4rem;\">";

            eventsText += eventsInfo[events].day;
            
            eventsText += "</h2><div><span class=\"text-dark h5\">Local: </span> <span class=\"text-gray h5\">";
            
            eventsText += eventsInfo[events].local;
            
            eventsText += "</span></div><div><span class=\"text-dark h5\">Horário: </span> <span class=\"text-gray h5\">";

            eventsText += eventsInfo[events].time;
            
            eventsText += "</span></div><div><span class=\"text-dark h5\">Sala: </span> <span class=\"text-gray h5\">";
            
            eventsText += eventsInfo[events].room;
            
            eventsText += "</span></div></div></div>";
        }

        document.getElementById("eventsContent").innerHTML = eventsText;

//##############################################################
//######################### Team ###############################
//##############################################################

    //Section Name
        document.getElementById("teamSection").innerHTML = itemTeam;

    //Team Members
        var teamInfo = [],
            teamText = "";

        //Member #Cassio
        teamInfo.push({ image:  "assets/img/team/cassio_a.jpg",
                        name:   "Cassio Amador",
                        work:   "Professor Coordenador",
                        email:  "cassioamador@utfpr.edu.br",
                        lattes: "http://lattes.cnpq.br/6506728481019083",
                        fb:     "https://www.facebook.com/profile.php?id=642033143",
                        lk:     "#!"});

        //Member #Mauricio
        teamInfo.push({ image:  "assets/img/team/mauricio_t.jpg",
                        name:   "Mauricio Takano",
                        work:   "Professor Cocoordenador",
                        email:  "takano@utfpr.edu.br",
                        lattes: "http://lattes.cnpq.br/3097222596929672",
                        fb:     "https://www.facebook.com/Mauricio.Iwama",
                        lk:     "https://www.linkedin.com/in/mauricio-takano-b44965175/"});

        //Member #Lucas
        teamInfo.push({ image:  "assets/img/team/lucas_p.jpg",
                        name:   "Lucas Pinto",
                        work:   "Aluno Bolsista",
                        email:  "lucaspinto@alunos.utfpr.edu.br",
                        lattes: "https://pradoplucas.github.io/",
                        fb:     "https://www.facebook.com/pradoplucas",
                        lk:     "https://www.linkedin.com/in/pradoplucas/"});

        //Member #Bianca
        teamInfo.push({ image:  "assets/img/team/bianca_a.jpg",
                        name:   "Bianca Andrade",
                        work:   "Aluna da UTFPR",
                        email:  "biancaandrade@alunos.utfpr.edu.br",
                        lattes: "http://lattes.cnpq.br/9165961440383599",
                        fb:     "https://www.facebook.com/bianca.deandrade",
                        lk:     "#!"});

        //Member #Jean
        teamInfo.push({ image:  "assets/img/team/example.jpg",
                        name:   "Jean Rocha",
                        work:   "Aluno da UTFPR",
                        email:  "@alunos.utfpr.edu.br",
                        lattes: "#!",
                        fb:     "#!",
                        lk:     "#!"});
     
        //Member #Mariana
        teamInfo.push({ image:  "assets/img/team/example.jpg",
                        name:   "Mariana Figueiredo",
                        work:   "Aluna da UTFPR",
                        email:  "marianagomes@alunos.utfpr.edu.br",
                        lattes: "#!",
                        fb:     "#!",
                        lk:     "#!"});

        //Member #Iori
        teamInfo.push({ image:  "assets/img/team/example.jpg",
                        name:   "Iori Pitoli",
                        work:   "Aluno da UTFPR",
                        email:  "ioripitoli@alunos.utfpr.edu.br",
                        lattes: "#!",
                        fb:     "#!",
                        lk:     "#!"});

        //Member #Gabriel
        teamInfo.push({ image:  "assets/img/team/example.jpg",
                        name:   "Gabriel Torres",
                        work:   "Aluno da UTFPR",
                        email:  "gabtor@alunos.utfpr.edu.br",
                        lattes: "#!",
                        fb:     "#!",
                        lk:     "#!"});

        for(person in teamInfo){
            teamText += "<div class=\"col-lg-3 col-md-4 col-sm-6\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"";

            teamText += teamInfo[person].image;

            teamText += "\"><h4>";

            teamText += teamInfo[person].name;

            teamText += "</h4><p class=\"text-black-75 mb-0\">";

            teamText += teamInfo[person].work;

            teamText += "</p><p class=\"fz-muted\"> <a href=\"mailto:";

            teamText += teamInfo[person].email;

            teamText += "\">";

            teamText += teamInfo[person].email;

            teamText += "</a> </p><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";

            teamText += teamInfo[person].lattes;

            teamText += "\"><i class=\"fas fa-user\"></i></a><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";

            teamText += teamInfo[person].facebook;

            teamText += "\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";

            teamText += teamInfo[person].linkedin;

            teamText += "\"><i class=\"fab fa-linkedin-in\"></i></a></div></div>";
        }

        document.getElementById("teamContent").innerHTML = teamText;


//##############################################################
//######################## Program #############################
//##############################################################

    //Section Name
        document.getElementById("programSection").innerHTML = itemProgram;

    //Program Description
        document.getElementById("programDescription").innerHTML = "O <b>LUDICO</b> - Laboratório Universitário de Desenvolvimento de Inteligências e Cognições, é um programa de extensão da Universidade Tecnológica Federal do Paraná (UTFPR), tendo como objetivo desenvolver capacidades de aprendizagem nos participantes, melhorando também sua aptidão em raciocínio lógico, análise crítica de ações e de pontos de vista, organização e em relações interpessoais.<br>O programa tem como vertente três projetos de extensão.";

        //Board Games
            document.getElementById("imageBD").src = "assets/img//logos/logo_bd.png";
            document.getElementById("nameBD").innerHTML = "Board Games";

        //Escape Room
            document.getElementById("imageEscape").src = "assets/img//logos/logo_escape.png";
            document.getElementById("nameEscape").innerHTML = "Escape Room";

        //RPG
            document.getElementById("imageRPG").src = "assets/img//logos/logo_rpg.png";
            document.getElementById("nameRPG").innerHTML = "RPG";

//##############################################################
//######################## Contact #############################
//##############################################################

    //Section Name
        document.getElementById("contactSection").innerHTML = itemContact;

    //Contact Description
        document.getElementById("contactDescription").innerHTML = "Caso tenha alguma dúvida, entre em contato com algum integrante da equipe, ou mande uma mensagem através das nossas redes sociais abaixo.";

        //Facebook
            document.getElementById("contactFB").href = "https://www.facebook.com/UTFPR.BG";
            document.getElementById("FBID").innerHTML = "fb: ";
            document.getElementById("FBInfo").innerHTML = "utfpr.bg";

        //Instagram
            document.getElementById("contactIG").href = "https://www.instagram.com/utfprbg/";
            document.getElementById("IGID").innerHTML = "ig: ";
            document.getElementById("IGInfo").innerHTML = "utfprbg";

        //YouTube
            document.getElementById("contactYT").href = "https://www.youtube.com/channel/UCqcpWlEoW3Vh-7ivKnnfsLg";
            document.getElementById("YTID").innerHTML = "yt: ";
            document.getElementById("YTInfo").innerHTML = "UTFPRBG";

        //Blog
            document.getElementById("contactBlog").href = "http://utfprbg.cp.utfpr.edu.br/";
            document.getElementById("blogInfo").innerHTML = "Blog Oficial";

//##############################################################
//######################### Footer #############################
//##############################################################

    //Copyright
        var copyright = "Copyright © 2021 - Lucas do Prado Pinto";

        document.getElementById("copyright").innerHTML = copyright;

        if(mode == "10c"){
            var dezconectadosText = "";

            dezconectadosText += "<div class=\"text-dark\"></div>";

            dezconectadosText += "Saibam e estejam avisados, este projeto de Escape Room, que faz parte do programa de extensão LUDICO, está mentindo para vocês, eles não são quem dizem ser.<br><br>";
            dezconectadosText += "Estudos e pesquisas do MIT (Minha InTuição) indicam que as <span style=\"color: #dc3545;\">redes sociais</span> do programa de extensão LUDICO (que podem ser encontradas logo acima, na <span style=\"color: #dc3545;\">seção de Contato</span>) estão diretamente relacionadas com os illuminatis, ";
            dezconectadosText += "o que foi comprovado pela rede de rádio e televisão VMC-TV (Vozes da Minha Cabeça - TV). Por isso, nós <span style=\"color: #000000; font-weight: bold;\">Paralógicos</span>, do movimento \"Liberta Eu(ler)\", hackeamos todas as redes sociais do LUDICO, e relacionamos as <span style=\"color: #dc3545;\">formas geométricas</span> deixadas nas fazendas e sítios online do programa.<br><br>";
            dezconectadosText += "Espero que entendam, não queremos o mal de Euler, queremos libertá-lo das garras da Expoente.<br><br>";
            dezconectadosText += "Não sabemos por quanto tempo tudo ficará no ar, mas quando obtiverem as informações, parte da resposta estará neste link:";

            dezconectadosText += "</div><br><br><a style=\"color: #007bff\" target=\"_blank\"";

            dezconectadosText += "href=\"https://keyscape.github.io/euclidesModule/\">https://keyscape.github.io/euclidesModule/</a>";

            document.getElementById("dezconectados").innerHTML = dezconectadosText;
            document.getElementById("dezconectados").style = "";
        }
