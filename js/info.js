//##############################################################
//###################### Navigation ############################
//##############################################################

    //Project Name
        var name = "Keyscape";

        document.getElementById("project-title").innerHTML = name;
        document.getElementById("project-name").innerHTML = name;

    //Item Section
        var item_about = "Sobre";
        var item_portfolio = "Salas";
        var item_events = "Eventos";
        var item_team = "Equipe";
        var item_program = "Programa";
        var item_contact = "Contato";

        document.getElementById("item-about").innerHTML = item_about;
        document.getElementById("item-portfolio").innerHTML = item_portfolio;
        document.getElementById("item-events").innerHTML = item_events;
        document.getElementById("item-team").innerHTML = item_team;
        document.getElementById("item-program").innerHTML = item_program;
        document.getElementById("item-contact").innerHTML = item_contact;

//##############################################################
//####################### Masthead #############################
//##############################################################

    //Project Name
        document.getElementById("project-name-menu").innerHTML = name;

    //Project Description
        //var description = "O <i>Escape Room</i> como forma de desenvolvimento de habilidades";
        var description = "Se você estiver <i>10conectado</i>, dê uma olhada na seção de Contato";
        
        document.getElementById("project-description").innerHTML = description;

//##############################################################
//######################### About ##############################
//##############################################################

    //What is a Escape Room?
        var title_what_is_escape = "O que é um <i>Escape Room</i>?";
        var what_is_escape = "O <i>Escape Room</i> é uma sala no qual um grupo de participantes precisa desvendar algum mistério, num tempo pré-determinado, através da resolução de quebra-cabeças. Estes quebra-cabeças são de diversos tipos, e estão espalhados pela sala, misturados com outros itens que fazem parte da história criada para um determinado evento.";
        
        document.getElementById("title-what-is-escape").innerHTML = title_what_is_escape;
        document.getElementById("what-is-escape").innerHTML = what_is_escape;

    //Who are we?
        var title_who_are_we = "Quem somos nós?";
        var who_are_we = "O projeto faz a criação e apresentação de <i>Escape Rooms</i>, e é desenvolvido por alunos e professores da Universidade Tecnológica Federal do Paraná (UTFPR), câmpus Cornélio Procópio.";
        
        document.getElementById("title-who-are-we").innerHTML = title_who_are_we;
        document.getElementById("who-are-we").innerHTML = who_are_we;

//##############################################################
//####################### Portfolio ############################
//##############################################################

    //Description of the Rooms

        //Amálgama
            var description_room_amalgama = "Na sala \"Amálgama\", quatro diferentes mundos magicamente se chocam, e os participantes devem se unir para desvendar os mistérios, encontrar sete esferas místicas e devolver a paz em meio ao caos que foi criado.";
            var theme_amalgama = "";
            var name_amalgama = "Amálgama";

            document.getElementById("room-amalgama").title = description_room_amalgama;
            document.getElementById("theme-amalgama").innerHTML = theme_amalgama;
            document.getElementById("name-amalgama").innerHTML = name_amalgama;

        //Amarelos
            var description_room_amarelos = "Na sala \"Amarelos\", um grupo de viajantes do tempo precisa descobrir um importante mistério que pode mudar a história.";
            var theme_amarelos = "";
            var name_amarelos = "Amarelos";

            document.getElementById("room-amarelos").title = description_room_amarelos;
            document.getElementById("theme-amarelos").innerHTML = theme_amarelos;
            document.getElementById("name-amarelos").innerHTML = name_amarelos;

        //Missing
            var description_room_missing = "Na sala \"Missing\", um rapaz foge de casa, e os participantes precisam descobrir o porquê, e para onde ele foi.";
            var theme_missing = "";
            var name_missing = "<i>Missing</i>";

            document.getElementById("room-missing").title = description_room_missing;
            document.getElementById("theme-missing").innerHTML = theme_missing;
            document.getElementById("name-missing").innerHTML = name_missing;

        //Quarentena
            var description_room_quarentena = "Na sala \"Quarentena\", um grupo de pesquisadores precisa encontrar um antídoto para uma infecção que já pode ter atacado um deles.";
            var theme_quarentena = "";
            var name_quarentena = "Quarentena";

            document.getElementById("room-quarentena").title = description_room_quarentena;
            document.getElementById("theme-quarentena").innerHTML = theme_quarentena;
            document.getElementById("name-quarentena").innerHTML = name_quarentena;

//##############################################################
//######################## Events ##############################
//##############################################################

    //Section Name
        document.getElementById("events-section").innerHTML = item_events;

    //Events Content
        var event_day = [];
        var event_local = [];
        var event_time = [];
        var event_room = [];

        //Event #1
            event_day.push(""); //Exemplo: "DD/MM"
            event_local.push(""); //Exemplo: "UTFPR-CP"
            event_time.push(""); //Exemplo: "13h às 18h"
            event_room.push(""); //Exemplo: "Quarentena"

        //Event #2
            event_day.push("");
            event_local.push("");
            event_time.push("");
            event_room.push("");

        //Event #3
            event_day.push("");
            event_local.push("");
            event_time.push("");
            event_room.push("");

        var number_of_events = 0;

        document.getElementById("events-content").innerHTML = contentEvents(event_day, event_local, event_time, event_room, number_of_events);
       
        function contentEvents(day, local, time, room, number) {
            if(number == 0) {
                return "<div class=\"col-lg-6 col-md-8 text-center\"><h2 class=\"text-uppercase text-gray\">Não há eventos programados.</h2></div>";
            }

            else {

                var part_1 = "<div class=\"col-lg-4 col-md-12 mb-4 mb-lg-0 text-center\"><div><h2 class=\"section-heading text-black\" style=\"font-size: 4rem;\">";
                var part_2 = "</h2><div><span class=\"text-dark h5\">Local: </span> <span class=\"text-gray h5\">";
                var part_3 = "</span></div><div><span class=\"text-dark h5\">Horário: </span> <span class=\"text-gray h5\">";
                var part_4 = "</span></div><div><span class=\"text-dark h5\">Sala: </span> <span class=\"text-gray h5\">";
                var part_5 = "</span></div></div></div>"

                var result_text = "";

                var events;

                for(events = 0; events < number; events ++) {
                    result_text += part_1;

                    result_text += day[events];
                    
                    result_text += part_2;
                    
                    result_text += local[events];
                    
                    result_text += part_3;

                    result_text += time[events];
                    
                    result_text += part_4;
                    
                    result_text += room[events];
                    
                    result_text += part_5;
                }

                return result_text;
            }
        }

//##############################################################
//######################### Team ###############################
//##############################################################

    //Section Name
        document.getElementById("team-section").innerHTML = item_team;

    //Team Members
        var team_image = [];
        var team_name = [];
        var team_work = [];
        var team_email = [];
        var team_lattes = [];
        var team_facebook = [];
        var team_linkedin = [];

        //Member #Cassio
            team_image.push("assets/img/example.jpg");
            team_name.push("Cassio Amador");
            team_work.push("Professor Coordenador");
            team_email.push("cassioamador@utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/6506728481019083");
            team_facebook.push("https://www.facebook.com/profile.php?id=642033143");
            team_linkedin.push("#!");

        //Member #Mauricio
            team_image.push("assets/img/example.jpg");
            team_name.push("Mauricio Takano");
            team_work.push("Professor Cocoordenador");
            team_email.push("takano@utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/3097222596929672");
            team_facebook.push("https://www.facebook.com/Mauricio.Iwama");
            team_linkedin.push("https://www.linkedin.com/in/mauricio-takano-b44965175/");

        //Member #Lucas
            team_image.push("assets/img/example.jpg");
            team_name.push("Lucas Pinto");
            team_work.push("Aluno Bolsista");
            team_email.push("lucaspinto@alunos.utfpr.edu.br");
            team_lattes.push("https://pradoplucas.github.io/");
            team_facebook.push("https://www.facebook.com/pradoplucas");
            team_linkedin.push("https://www.linkedin.com/in/pradoplucas/");

        //Member #Bianca
            team_image.push("assets/img/example.jpg");
            team_name.push("Bianca Andrade");
            team_work.push("Aluna Bolsista");
            team_email.push("biancaandrade@alunos.utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/9165961440383599");
            team_facebook.push("https://www.facebook.com/bianca.deandrade");
            team_linkedin.push("#!");

        //Member #João
            team_image.push("assets/img/example.jpg");
            team_name.push("João Licorini");
            team_work.push("Aluno da UTFPR");
            team_email.push("licorini@alunos.utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/6617320107975336");
            team_facebook.push("https://www.facebook.com/joao.licorini");
            team_linkedin.push("https://www.linkedin.com/in/jo%C3%A3o-victor-mariano-licorini-1626a4176/");

        //Member #Leandro
            team_image.push("assets/img/example.jpg");
            team_name.push("Leandro Bertoldi");
            team_work.push("Aluno da UTFPR");
            team_email.push("leandrobertoldi@alunos.utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/3965413341533271");
            team_facebook.push("#!");
            team_linkedin.push("https://www.linkedin.com/in/leandrocnb/");

        //Member #Borba
            team_image.push("assets/img/example.jpg");
            team_name.push("Lucas Borba");
            team_work.push("Aluno da UTFPR");
            team_email.push("lucasborba@alunos.utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/9633178385958188");
            team_facebook.push("https://www.facebook.com/lucas.borba.568");
            team_linkedin.push("https://www.linkedin.com/in/lucas-borba-257a7898/");
/*
        //Member #8
            team_image.push("assets/img/example.jpg");
            team_name.push("Thiago Corrêa");
            team_work.push("Aluno da UTFPR");
            team_email.push("thiagocorrea@alunos.utfpr.edu.br");
            team_lattes.push("http://lattes.cnpq.br/6131680182555621");
            team_facebook.push("https://www.facebook.com/profile.php?id=100003477515103");
            team_linkedin.push("https://www.linkedin.com/in/thiago-pereira-1ab54419b/");
*/
        var number_of_members = 7;

        document.getElementById("team-content").innerHTML = contentTeam(team_image, team_name, team_work, team_email, team_lattes, team_facebook, team_linkedin, number_of_members);

        function contentTeam(image, name, work, email, lattes, facebook, linkedin, number) {
            part_1 = "<div class=\"col-lg-3 col-md-4 col-sm-6\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"";
            part_2 = "\"><h4>";
            part_3 = "</h4><p class=\"text-black-75 mb-0\">";
            part_4 = "</p><p class=\"fz-muted\"> <a href=\"mailto:";
            part_5 = "\">";
            part_6 = "</a> </p><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";
            part_7 = "\"><i class=\"fas fa-user\"></i></a><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";
            part_8 = "\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" target=\"_blank\" href=\"";
            part_9 = "\"><i class=\"fab fa-linkedin-in\"></i></a></div></div>";

            var result_text = "";

            var members;

            for(members = 0; members < number; members++) {
                result_text += part_1;

                result_text += image[members];

                result_text += part_2;

                result_text += name[members];

                result_text += part_3;

                result_text += work[members];

                result_text += part_4;

                result_text += email[members];

                result_text += part_5;

                result_text += email[members];

                result_text += part_6;

                result_text += lattes[members];

                result_text += part_7;

                result_text += facebook[members];

                result_text += part_8;

                result_text += linkedin[members];

                result_text += part_9;
        
            }

            return result_text;
        }

//##############################################################
//######################## Program #############################
//##############################################################

    //Section Name
        document.getElementById("program-section").innerHTML = item_program;

    //Program Description
        var program_description = "O <b>LUDICO</b> - Laboratório Universitário de Desenvolvimento de Inteligências e Cognições, é um programa de extensão da Universidade Tecnológica Federal do Paraná (UTFPR), tendo como objetivo desenvolver capacidades de aprendizagem nos participantes, melhorando também sua aptidão em raciocínio lógico, análise crítica de ações e de pontos de vista, organização e em relações interpessoais.<br>O programa tem como vertente três projetos de extensão.";

        document.getElementById("program-description").innerHTML = program_description;

        //Board Games
            var image_bd = "assets/img//logos/logo_bd.png";
            var name_bd = "Board Games";

            document.getElementById("image-bd").src = "assets/img//logos/logo_bd.png";
            document.getElementById("name-bd").innerHTML = name_bd;

        //Escape Room
            var image_escape = "assets/img//logos/logo_escape.png";
            var name_escape = "Escape Room";

            document.getElementById("image-escape").src = image_escape;
            document.getElementById("name-escape").innerHTML = name_escape;

        //RPG
            var image_rpg = "assets/img//logos/logo_rpg.png";
            var name_rpg = "RPG";

            document.getElementById("image-rpg").src = image_rpg;
            document.getElementById("name-rpg").innerHTML = name_rpg;

//##############################################################
//######################## Contact #############################
//##############################################################

    //Section Name
        document.getElementById("contact-section").innerHTML = item_contact;

    //Contact Description
        var contact_description = "Caso tenha alguma dúvida, entre em contato com algum integrante da equipe, ou mande uma mensagem através das nossas redes sociais abaixo.";

        document.getElementById("contact-description").innerHTML = contact_description;

        //Facebook
            var contact_facebook = "https://www.facebook.com/UTFPR.BG";
            document.getElementById("contact-facebook").href = contact_facebook;

            var facebook_id = "fb: ";
            document.getElementById("facebook-id").innerHTML = facebook_id;

            var facebook_info = "utfpr.bg";
            document.getElementById("facebook-info").innerHTML = facebook_info;

        //Blog
            var contact_blog = "http://utfprbg.cp.utfpr.edu.br/";
            document.getElementById("contact-blog").href = contact_blog;

            var blog_info = "Blog Oficial";
            document.getElementById("blog-info").innerHTML = blog_info;

        //Instagram
            var contact_instagram = "https://www.instagram.com/utfprbg/";
            document.getElementById("contact-instagram").href = contact_instagram;

            var instagram_id = "ig: ";
            document.getElementById("instagram-id").innerHTML = instagram_id;

            var instagram_info = "utfprbg";
            document.getElementById("instagram-info").innerHTML = instagram_info;

//##############################################################
//######################### Footer #############################
//##############################################################

    //Copyright
        var copyright = "Copyright © 2020 - Lucas do Prado Pinto";

        document.getElementById("copyright").innerHTML = copyright;

        var dezconectados_header_1 = "Estudos e pesquisas do MIT (Minha InTuição) indicam que as redes sociais do programa de extensão LUDICO estão diretamente relacionadas com os illuminatis, ",
            dezconectados_header_2 = "o que foi comprovado pela rede de rádio e televisão VMC (Vozes da Minha Cabeça). Por isso, nós, Paralógicos do movimento \"Liberta EUler\", hackeamos todos eles, ",
            dezconectados_header_3 = "e relacionamos com as formas geométricas deixadas nas fazendas e sítios online do programa.<br>",
            dezconectados_header_4 = "Não sabemos por quanto tempo ficará no ar, mas quando obtiverem as informações, parte da resposta estará nesse link abaixo.",
            dezconectados_link = "https://keyscape.github.io/10conectados/";

        document.getElementById("dezconectados-header").innerHTML = dezconectados_header_1 + dezconectados_header_2 + dezconectados_header_3 + dezconectados_header_4;
        document.getElementById("dezconectados-link").href = dezconectados_link;
        document.getElementById("dezconectados-text").innerHTML = dezconectados_link;