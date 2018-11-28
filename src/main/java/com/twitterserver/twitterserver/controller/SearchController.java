package com.twitterserver.twitterserver.controller;

import com.twitterserver.twitterserver.domain.request.Query;
import com.twitterserver.twitterserver.domain.response.QueryResult;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin("*")
@RestController()
@RequestMapping("/api")
public class SearchController {
    @PostMapping("/search")
    @ResponseBody QueryResult postSearch(@RequestBody Query query) {
        String url = "http://localhost:8081/api/search";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        ResponseEntity<QueryResult> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), QueryResult.class);
        return response.getBody();
    }
}

