-- Scripts de inser��o de usuarios
/*
Valores para equipes:
1 = Administrador
2 = Desenvolvimento
3 = Redes
4 = Multimidia
Qualquer outro valor n�o ser� aceito (CONSTRAINT EQUIPEVALIDA)
*/
INSERT INTO USUARIOS(EMAIL,SENHA,EQUIPE) VALUES
('admin@admin.com','123456778',1),
('helena@gmail.com','umasenhadificil123',2),
('professorderedesqueeunaoseionome@gmail.com','umasenhamaisdificilqueaanterior123',3),
('email@gmail.com','senha@senha',4);

-- Script de inser��o de temas
INSERT INTO TEMAS(NOME) VALUES ('Gest�o'),('HQs')

-- Script de inser��o de Projetos (deve deferenciar um tema existente)
INSERT INTO PROJETOS(NOME,IDTEMA) VALUES('Controle de Estoque',1),('Listagem de personagens',2);