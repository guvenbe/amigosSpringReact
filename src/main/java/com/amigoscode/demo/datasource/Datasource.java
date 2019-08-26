package com.amigoscode.demo.datasource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//If Hikari Datasource is needed
//import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

@Configuration
public class Datasource {

    @Bean
    @ConfigurationProperties(prefix = "app.datasource")
    public  DataSource postgresDataSource(){
        return DataSourceBuilder
                .create()
                .build();
    }

//    @Bean
//    @ConfigurationProperties(prefix = "app.datasource")
//    public  HikariDataSource postgresDataSource(){
//        return DataSourceBuilder
//                .create()
//                .type(HikariDataSource.class)
//                .build();
//    }

}
