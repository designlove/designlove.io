module ApplicationHelper
  def typekit_include_tag(apikey)
    javascript_include_tag("https://use.typekit.com/#{apikey}.js") +
    javascript_tag("try{Typekit.load()}catch(e){}")
  end
end
