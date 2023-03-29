package com.proxy;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.jsoup.Jsoup;

import java.util.LinkedHashMap;
import java.util.Map;

public class Main implements RequestHandler<Map<String,Object>, String> {

    private String getHtml(String id) {
        try {
            String imdbUrl = getUrlById(id);
            return Jsoup.connect(imdbUrl).get().html();
        } catch (Exception e) {
            String msg = e.getMessage();
            return "ERROR: " + msg;
        }
    }

    private boolean isPerson(String id) {
        return id.startsWith("nm") || id.contains("name");
    }

    private String getUrlById(String id) {
        return (isPerson(id)) ? ("https://www.imdb.com/name/" + id) : ("https://www.imdb.com/title/" + id);
    }

    @Override
    public String handleRequest(Map<String,Object> event, Context context)
    {
        String id = null;
        try {
            String response = new String("200 OK");
            LinkedHashMap<String, String> queryStringParameters = (LinkedHashMap<String, String>)event.get("queryStringParameters");
            id = queryStringParameters.get("id");
            return getHtml(id);
        } catch (Exception e) {
            String msg = e.getMessage();
            return "ERROR: (" + id + ")" + msg;
        }
    }
}
