$(document).ready(function () {
  var blockedURLs = new Set([
    '24orenotizie.com',
    '70news.wordpress.com',
    'abcnews.com.co',
    'americannews.com',
    'blognews24ore.com',
    'breaknotizie.com',
    'catenaumana.com',
    'chesuccede.it',
    'clicknotizie.it',
    'condividilo.org',
    'coriere.net',
    'corrieredellapera.com',
    'corrieredelmattino.altervista.org',
    'corrieredisera.it',
    'curiosandoonline.com',
    'curiosity2013.altervista.org',
    'dailystar.co.uk',
    'direttanews.it',
    'direttanews24.com',
    'eaglerising.com',
    'empirenews.net',
    'endingthefed.com',
    'essere-informati.it',
    'funvideosonline.info',
    'gazzetta24.com',
    'gazzettadellasera.com',
    'gazzettanews24.com',
    'giornaleilsole.com',
    'giornaleinformativo.altervista.org',
    'grandecocomero.com',
    'guarda.link',
    'guarda.one',
    'hotglobalnews.com',
    'ilbellocheavanza.com',
    'ilcorriere.cloud',
    'ilcorrieredellanotte.it',
    'ilfatoquotidiano.com',
    'ilfattaccio.org',
    'ilfattoquotidaino.it',
    'ilgiornalenews.com',
    'ilmattoquotidiano.it',
    'ilmessaggio.it',
    'ilpatriota.it',
    'ilquotidaino.wordpress.com',
    'iltelegrafo.altervista.org',
    'imigliori.info',
    'imigliorivideo.co',
    'iovivoaroma.org',
    'italiahotspot.altervista.org',
    'italiainmovimento.it',
    'italiani-informati.com',
    'italianosveglia.com',
    'italianotizie24.eu',
    'italiapatriamia.eu',
    'italiarialzati.com',
    'jedanews.it',
    'kevideo.eu',
    'la-cosa.it',
    'lafucina.it',
    'lanozione.com',
    'larepubblica.info',
    'lasera.altervista.org',
    'last-webs.com',
    'lfattonequotidiano.com',
    'libero-notizie.com',
    'liberogiornale.com',
    'linktoday.it',
    'livewebit.com',
    'mafia-capitale.it',
    'news24italia.com',
    'news24italy.com',
    'news24roma.com',
    'newscronaca.it',
    'newsitalys.com',
    'noinvasione.com',
    'notixonline.com',
    'notixweb.com',
    'notiziariosegreto.wordpress.com',
    'notizieflash.eu',
    'notiziepericolose.blogspot.com',
    'notiziespericolate.com',
    'ohmiaitalia.com',
    'pandapazzo.com',
    'paroladiugo.it',
    'perdavvero.com',
    'realfunny.info',
    'repubblica24.com',
    'robadapazzi.com',
    'rubrica24.altervista.org',
    'segretodistato.com',
    'siamolagente.altervista.org',
    'siamonapoletani.org',
    'skytg24news.com',
    'socialbuzz.it',
    'socialnotixweb.com',
    'stuppid.com',
    'succedenelmondo.com',
    'tg24.live',
    'tg5stelle.it',
    'theblacksphere.net',
    'theglobalsun.com',
    'thenationalsun.com',
    'thepoliticalinsider.com',
    'theracketreport.com',
    'tmzbreaking.com',
    'tmzuncut.com',
    'tmzworldnews.com',
    'trumpvision365.com',
    'truthcdm.com',
    'tuttoinweb.com',
    'tzetze.it',
    'ultimora24.it',
    'usanewsflash.com',
    'usconservativetoday.com',
    'usherald.com',
    'videoenotizie.it',
    'videoviraliweb.com',
    'web-news24.com',
    'webitalia360.com',
    'worldnewsdailyreport.com',
    'worldpoliticus.com',
    'wowchevideo.com',
    'younetspiegalevele.info',
    'zonagrigianews.com',
  ]);

  $(window).scroll(_.debounce(function () {
    $('.userContentWrapper .ellipsis')
      .not('.FriendButton')
      .each(function () {
        var url = $(this).text(),
          cleanURL = url.split('|')[0]
            .split('.').slice(-2).join('.');

        if (blockedURLs.has(cleanURL)) {
          var $blockedPost = $(this).closest('.userContentWrapper'),
            $userLink = $blockedPost.find('h5 a:first-child()');

          $blockedPost.fadeOut(400, function () {
            $blockedPost.html('<p class="suggestion">' + $userLink.text() +
              ' posted something which is probably false. Inform them that \
              <b>they are helping a scammer</b> reach more people, and \
              recommend them to <a href="https://goo.gl/W3i1Jj">install \
              StopTheBullshit</a>.</p>');
            $blockedPost.fadeIn();
          });
        }
    }, 400);
  }));
});
