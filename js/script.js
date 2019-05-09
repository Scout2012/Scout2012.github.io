var primary_color= "#0A2033";
var active= "#246A73";
var inactive = "#69626D"
var liner_color= "#59C9A5";

$(document).ready(()=>{
    $(".job").click((e)=>{
        var num = e.target.id[e.target.id.length-1];
        var descriptions = ($(".descriptions").find("div"));
        //clear
        for(var i = 0; i < descriptions.length; i++){
            $("#job-tab"+i).css("border-left-color", inactive);
            $("#job-tab"+i).css("background", primary_color);
            $("#job-tab"+ i).css("color", liner_color);
            $("#job-desc"+i).hide();
        }
        //main one
        $("#job-tab"+ num).css("border-left-color", active);
        $("#job-tab"+ num).css("color", "white");
        $("#job-tab"+ num).css("background", liner_color);
        $("#job-desc"+ num).show();
    });

    $(".proj").click((e)=>{
        var num = e.target.id[e.target.id.length-1];
        var descriptions = ($(".descriptions").find("div"));
        for(var i = 0; i < descriptions.length; i++){
            $("#proj-tab"+i).css("border-left-color", inactive);
            $("#proj-tab"+i).css("background", primary_color);
            $("#proj-tab"+ i).css("color", liner_color);
            $("#proj-desc"+i).hide();
        }
        $("#proj-tab"+ num).css("border-left-color", active);
        $("#proj-tab"+ num).css("color", "white");
        $("#proj-tab"+ num).css("background", liner_color);
        $("#proj-desc"+ num +" > a").css("width", "100%");
        $("#proj-desc"+ num +" > a").css("text-align", "center");
        $("#proj-desc"+ num).show();
        $("#proj-desc"+ num).css("display", "flex");
    });
})