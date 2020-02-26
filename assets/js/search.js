
var documents = [{
    "id": 0,
    "url": "https://briandw.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://briandw.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://briandw.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://briandw.github.io/2020/02/25/ContrastiveLossExplnation.html",
    "title": "Title",
    "body": "2020/02/25 -                 import numpy as np          def norm_tensor(x):  x = np. array(x)  x = x/np. linalg. norm(x)  return torch. tensor(x)          t = 0. 07q = norm_tensor([[1. 0, 0. 01, 0. 0]])k_p = norm_tensor([[1. 0, 0. 02, 0. ]])k_neg = norm_tensor([[1, 1, 1]])q, k_p, k_neg  (tensor([[1. 0000, 0. 0100, 0. 0000]], dtype=torch. float64), tensor([[0. 9998, 0. 0200, 0. 0000]], dtype=torch. float64), tensor([[0. 5774, 0. 5774, 0. 5774]], dtype=torch. float64))        pos = torch. mm(q, k_p. transpose(1,0))neg = torch. mm(q, k_neg. transpose(1,0))exp = torch. exp(pos/t) / torch. exp(neg/t)          pos, neg, exp  (tensor([[1. 0000]], dtype=torch. float64), tensor([[0. 5831]], dtype=torch. float64), tensor([[385. 7067]], dtype=torch. float64))        logits = torch. cat((pos, neg), dim=1)indexes = torch. tensor([0])logits, indexes  (tensor([[1. 0000, 0. 5831]], dtype=torch. float64), tensor([0]))        loss_func = torch. nn. CrossEntropyLoss()          loss_func(logits/t, indexes)  tensor(0. 0026, dtype=torch. float64)        loss_func = nn. CrossEntropyLoss()input = torch. randn(3, 5, requires_grad=True)target = torch. empty(3, dtype=torch. long). random_(5)output = loss_func(input, target)input, target, output  (tensor([[-0. 2129, -0. 2238, -1. 1312, -0. 1827, -0. 0693],     [-1. 4510, -0. 6595, 0. 0158, 0. 0501, 2. 1263],     [ 1. 7401, 0. 2533, 1. 4138, 0. 8179, 0. 1051]], requires_grad=True), tensor([4, 2, 4]), tensor(2. 1147, grad_fn=&lt;NllLossBackward&gt;))        input. shape  torch. Size([3, 5])        q = torch. tensor([[0. 1, 0. 1, 0. 1]])k = torch. tensor([[0. 11, 0. 11, 0. 11]])K = torch. tensor([[0. 9, 0. 9, 0. 9]]) * 2. 0N = 1l_pos = torch. bmm(q. view(N,1,-1), k. view(N,-1,1))l_neg = torch. mm(q. view(N,-1), K. T)logits = torch. cat([l_pos. view(N, 1), l_neg], dim=1)labels = torch. zeros(N, dtype=torch. long)out = loss_func(logits/t, labels)out  tensor(7. 2436)        import numpy as np          def normalize(x):  return x/np. linalg. norm(x)feature_size = 3num_neg = 5p1 = np. random. normal(0, size=(feature_size))p2 = p1+0. 001p1 = p1/np. linalg. norm(p1)p2 = p2/np. linalg. norm(p2)neg = np. random. normal(0, size=(num_neg, feature_size))for i in range(num_neg):  neg[i] = normalize(neg[i])print(p1, p2, neg)pos_dot = p1. dot(p2)neg_dot = np. zeros(num_neg)for i in range(num_neg):  neg_dot[i] = p1. dot(neg[i])  pos_dot, neg_dot  [ 0. 09149717 0. 01994695 -0. 99560554] [ 0. 09266782 0. 02104917 -0. 99547456] [[ 0. 09251575 -0. 43929877 0. 89356445] [-0. 89571009 -0. 42199601 0. 14008142] [ 0. 73074264 0. 62512638 -0. 27428489] [-0. 19425023 0. 86533893 0. 46201233] [-0. 07975241 0. 97700619 -0. 19773331]](0. 9999986987795759, array([-0. 88993546, -0. 22983831, 0. 35240981, -0. 46049451, 0. 20905556]))        p1. dot(p2)  0. 9999986987795759        exp = np. exp(np. concatenate(([pos_dot], neg_distance))) softmax = exp/np. sum(exp)          -np. log(softmax[0])  0. 8447170982995262        t = 0. 07logits = np. concatenate(([pos_dot], neg_distance))/texp = np. exp(logits)loss = exp/np. sum(exp)          - np. log(loss[0])  4. 906935997142345e-05  "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}