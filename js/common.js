// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @explain:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) { 
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { 
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { 
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else { 
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/

/**
* @name     :itmeUnfolddown
* @author   :Nice
* @explain  :列表下展开
*/
function itmeUnfolddown(){
    var e=$(".m_itme_unfolddown");
    var title=e.find('.title');

    title.click(function(event) {
        $(this).toggleClass('hover');
    });
}
/* @end **/


/**
* @name     :accumulativeBtn
* @author   :Nice
* @explain  :按钮累计提示
*/
function accumulativeBtn(id){
    var e=$("#"+id);
    var input=e.find('input');
    var plus=e.find('.plus');
    var original=e.find('.original');

    var inputVal=parseInt(input.val());
    
    if (inputVal==0) {
        plus.css({
            display: 'inline-block'
        });
    };

    if (inputVal>0) {
        plus.css({
            display: 'inline-block'
        });

        original.css({
            display: 'inline-block'
        });
    };

    input.change(function(event) {
        if($("#"+id+"input:checked")){
            inputVal=inputVal+1;
            input.val(inputVal);
            plus.html("+"+inputVal);
        }
        if($("#"+id+"input")){
            inputVal=inputVal-1;
            input.val(inputVal);
            original.html("+"+inputVal);
        }

        if (inputVal==0) {
            original.css({
                display: 'none'
            });
        };
        return inputVal
    });
}
/* @end **/














/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/