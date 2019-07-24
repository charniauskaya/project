function(){ 
  ("#index_tab_trigger a").click(function(e){
    e.preventDefault();
    (this).tab('show');
  });
};

(function(){ 
    // Отображается 1 вкладка, 
    // т.к. отсчёт начинается с нуля
    $("#myTab li:eq(0) a").tab('show');
});