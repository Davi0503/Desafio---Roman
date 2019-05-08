-- Scripts de inserção de usuarios
INSERT INTO USUARIOS(EMAIL,SENHA,EQUIPE) VALUES
('admin@admin.com','123456778','Administrador'),
('helena@gmail.com','umasenhadificil123','Desenvolvimento'),
('professorderedesqueeunaoseionome@gmail.com','umasenhamaisdificilqueaanterior123','Redes'),
('email@gmail.com','senha@senha','Multimidia');

-- Script de inserção de temas
INSERT INTO TEMAS(NOME) VALUES ('Gestão'),('HQs')

-- Script de inserção de Projetos (deve deferenciar um tema existente)
INSERT INTO PROJETOS(NOME,IDTEMA) VALUES('Controle de Estoque',1),('Listagem de personagens',2);
