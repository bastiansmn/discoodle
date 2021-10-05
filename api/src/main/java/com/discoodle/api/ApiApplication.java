package com.discoodle.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.io.File;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@SpringBootApplication
public class ApiApplication {

   public static final String RESSOURCES = "src/main/resources/";

   public static void main(String[] args) {
      SpringApplication.run(ApiApplication.class, args);
   }

   // Fix the CORS errors
   @Bean
   public FilterRegistrationBean simpleCorsFilter() {
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      CorsConfiguration config = new CorsConfiguration();
      config.setAllowCredentials(true);
      config.setAllowedMethods(Collections.singletonList("*"));

      /*
      Uncomment in developpement mode

      List<String> cors_allowed = new LinkedList<>();
      cors_allowed.add("http://localhost:8081");
      config.setAllowedOrigins(cors_allowed);
       */

      config.setAllowedHeaders(Collections.singletonList("*"));
      source.registerCorsConfiguration("/**", config);
      FilterRegistrationBean bean = new FilterRegistrationBean<>(new CorsFilter(source));
      bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
      return bean;
   }

}
