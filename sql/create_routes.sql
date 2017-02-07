drop table if exists `routes`;  
create table `routes` (
	`id`  			int 		not null 	auto_increment,
    `name`  		char(20) 	not null,
    `description`	char(200)	not null,
    `lines`			char(100)   not null,
    `from`			int not null,
    `to`   			int not null,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;  