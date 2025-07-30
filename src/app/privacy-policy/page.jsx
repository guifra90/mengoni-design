'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="tracking-wider"
                style={{
                  fontFamily: 'Belleza, sans-serif',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  color: '#000',
                  fontSize: 'clamp(32px, 6vw, 64px)',
                  lineHeight: '1.1',
                  letterSpacing: '0.1em'
                }}
              >
                PRIVACY E COOKIE POLICY
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 sm:space-y-12">
                
                {/* Privacy Policy */}
                <div className="space-y-6">
                  <h2
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(24px, 4vw, 32px)',
                      lineHeight: '1.2',
                      marginBottom: '1.5rem'
                    }}
                  >
                    NOTE SULLA PRIVACY POLICY DI QUESTO SITO WEB
                  </h2>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased',
                    marginBottom: '1.5rem'
                  }}>
                    In questa pagina si descrivono le modalità di gestione del nostro sito web in riferimento al trattamento dei dati personali degli utenti che lo consultano. Si tratta di un'informativa resa anche ai sensi dell'art. 13 del D.Lgs. n. 196/2003 – Codice in materia di protezione dei dati personali – a coloro che interagiscono con i servizi web della nostra società per via telematica a partire dall'indirizzo: www.mengonidesign.it corrispondente alla pagina iniziale del sito. L'informativa è resa solo per il sito suddetto e non anche per altri siti web eventualmente consultati dall'utente tramite link. L'informativa si ispira anche alla Raccomandazione n. 2/2001 tra le autorità europee per la protezione dei dati personali, riunite nel Gruppo istituito dall'art. 29 della direttiva n. 95/46/CE, adottato il 17 maggio 2001 per individuare alcuni requisiti minimi per la raccolta di dati personali on-line, e, in particolare, le modalità, i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti quando questi si collegano a pagine web, indipendentemente dagli scopi del collegamento.
                  </p>
                </div>

                {/* Il Titolare del Trattamento */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    IL TITOLARE DEL TRATTAMENTO
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    A seguito della consultazione di questo sito possono essere trattati dati relativi a persone identificate o identificabili. II "titolare" del loro trattamento è Mengoni Interni, Viale Pecori Giraldi, 24 B-C, Borgo San Lorenzo (FI), Tel e fax 055 8456274, E-mail: info@mengonidesign.it, Partita IVA 05336470488, che può essere contattata a detto indirizzo (ove è consultabile informativa completa ed organigramma) nella persona di Marco Mengoni quale t.t.d.
                  </p>
                </div>

                {/* Luogo Trattamento */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    LUOGO TRATTAMENTO DEI DATI
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    I trattamenti connessi ai servizi web di questo sito hanno luogo presso la predetta sede della Società e sono curati solo da personale incaricato del trattamento, oppure da eventuali incaricati di occasionali operazioni di manutenzione del sito web stesso, comunque altri identificati e qualificati. Nessun dato derivante dal servizio web viene comunicato o diffuso. I dati personali forniti dagli utenti sono utilizzati al solo fine di eseguire il servizio o la prestazione richiesta e sono comunicati a terzi nel solo caso in cui ciò sia a tal fine necessario o qualora la comunicazione fosse imposta da obblighi di legge.
                  </p>
                </div>

                {/* Tipi Dati Trattati */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    TIPI DATI TRATTATI
                  </h3>
                  
                  <h4
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '500',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased',
                      marginTop: '1rem'
                    }}
                  >
                    Dati Navigazione
                  </h4>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate ad interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.
                  </p>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc…) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente. Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento e vengono cancellati immediatamente dopo l'elaborazione. I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito.
                  </p>
                  
                  <h4
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '500',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased',
                      marginTop: '1.5rem'
                    }}
                  >
                    Dati forniti volontariamente dall'utente
                  </h4>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    L'invio facoltativo, esplicito e volontario, di posta elettronica agli indirizzi indicati su questo sito, comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva. Specifiche informative di sintesi verranno progressivamente riportate o visualizzate nelle pagine del sito predisposte per particolari servizi a richiesta.
                  </p>
                </div>

                {/* Facoltatività */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    FACOLTATIVITÀ DEL CONFERIMENTO DEI DATI
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    A parte quanto specificato per i dati di navigazione, l'utente è libero di fornire i dati personali riportati nei moduli di richiesta presenti sul sito per sollecitare l'invio di materiale informativo o di altre comunicazioni. II loro mancato conferimento può comportare l'impossibilità di ottenere quanto richiesto.
                  </p>
                </div>

                {/* Modalità Trattamento */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    MODALITÀ DEL TRATTAMENTO
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
                  </p>
                </div>

                {/* Diritti degli Interessati */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    DIRITTI DEGLI INTERESSATI
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    I soggetti cui si riferiscono i dati personali hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno dei medesimi dati a di conoscerne il contenuto e l'origine, verificarne l'esattezza o chiederne l'integrazione o l'aggiornamento, oppure la rettificazione (art. 7 del d.Igs. n. 196/2003). Ai sensi del medesimo articolo si ha il diritto di chiedere la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento. Le richieste vanno rivolte al titolare del trattamento su meglio identificato.
                  </p>
                </div>

                {/* P3P */}
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    P3P
                  </h3>
                  
                  <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    lineHeight: '1.62em',
                    fontWeight: '300',
                    color: 'rgb(89, 89, 89)',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    La presente informativa sulla privacy è consultabile in forma automatica dai piu recenti browser che implementano lo standard P3P ("Platform for Privacy Preferences Project") proposto dal World Wide WEB Consortium (www.w3c.org). Ogni sforzo verrà fatto per rendere il più possibile interoperabili le funzionalità di questo sito con i meccanismi di controllo automatico della privacy disponibili in alcuni prodotti utilizzati dagli utenti. Considerando che lo stato di perfezionamento dei meccanismi automatici di controllo non li rende attualmente esenti da errori e/o disfunzioni, si precisa che il presente documento, pubblicato all'indirizzo www.mengonidesign.it costituisce la "Privacy Policy" di questo sito che sarà soggetta a periodici aggiornamenti.
                  </p>
                </div>

                {/* Cookie Policy Separator */}
                <div className="py-8 border-t border-gray-200">
                  <h2
                    style={{
                      fontFamily: 'Belleza, sans-serif',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      color: '#000',
                      fontSize: 'clamp(24px, 4vw, 32px)',
                      lineHeight: '1.2',
                      marginBottom: '1.5rem'
                    }}
                  >
                    COOKIES POLICY
                  </h2>
                </div>

                {/* Cookie Sections */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3
                      style={{
                        fontFamily: 'Belleza, sans-serif',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        color: '#000',
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        lineHeight: '1.2'
                      }}
                    >
                      COSA SONO I COOKIE E COME LI USA QUESTO SITO?
                    </h3>
                    
                    <p style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '300',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased'
                    }}>
                      La presente informativa illustra come questo sito utilizza i cookie. Se visiti il nostro sito web e le impostazioni del tuo browser accettano i cookie, l'utilizzo dei nostri cookie sarà considerato accettato.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3
                      style={{
                        fontFamily: 'Belleza, sans-serif',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        color: '#000',
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        lineHeight: '1.2'
                      }}
                    >
                      COME FUNZIONANO I COOKIE?
                    </h3>
                    
                    <p style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '300',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased'
                    }}>
                      I cookie sono piccoli file inviati e memorizzati nel tuo computer dai siti web che visiti. I cookie sono memorizzati nella directory dei file del tuo browser. La volta successiva in cui visiterai il sito, il tuo browser leggerà il cookie e ritrasmetterà le informazioni al sito web o all'entità che originariamente ha creato il cookie. Per saperne di più su queste tecnologie e su come funzionano, visita, ad esempio, il sito allaboutcookies.org
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3
                      style={{
                        fontFamily: 'Belleza, sans-serif',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        color: '#000',
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        lineHeight: '1.2'
                      }}
                    >
                      PERCHÉ QUESTO SITO USA I COOKIE?
                    </h3>
                    
                    <p style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '300',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased'
                    }}>
                      Questo sito utilizza i cookie per offrirti un'esperienza di navigazione più funzionale. Puoi navigare senza interruzioni, ad esempio ricordando la lingua e il Paese selezionati e preservando l'autenticazione alle aree riservate del sito. Un collegamento alla nostra Politica sui Cookie è disponibile nella parte inferiore di ciascuna pagina del presente sito Web. Continuando a utilizzare questo sito Web e le sue funzionalità, autorizzi noi (e gli inserzionisti esterni di questo sito Web) a inserire cookie per le prestazioni nel tuo dispositivo di navigazione.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3
                      style={{
                        fontFamily: 'Belleza, sans-serif',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        color: '#000',
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        lineHeight: '1.2'
                      }}
                    >
                      COME POSSO GESTIRE I COOKIE?
                    </h3>
                    
                    <p style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '300',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased'
                    }}>
                      Esistono diversi modi per gestire i cookie e altre tecnologie di tracciabilità. Modificando le impostazioni del browser, puoi accettare o rifiutare i cookie o decidere di ricevere un messaggio di avviso prima di accettare un cookie dai siti Web visitati. Browser differenti utilizzano modi differenti per disabilitare i cookie, ma si trovano solitamente sotto il menu Strumenti o Opzioni. Puoi anche consultare il menu Aiuto del browser. Ti ricordiamo che disabilitando i cookie, alcune parti di questo sito web potrebbero non funzionare correttamente.
                    </p>
                    
                    <p style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 18px)',
                      lineHeight: '1.62em',
                      fontWeight: '300',
                      color: 'rgb(89, 89, 89)',
                      WebkitFontSmoothing: 'antialiased'
                    }}>
                      Se utilizzi più computer in postazioni diverse, assicurati che ogni browser sia impostato in modo da soddisfare le tue preferenze. Puoi eliminare tutti i cookie installati nella cartella dei cookie del tuo browser. Questo sito utilizza cookie gestiti da terze parti per varie finalità, che possono essere ad esempio la profilazione di chi naviga sul sito al fine di proporre pubblicità in modo personalizzato, la registrazione aggregata o meno delle attività di chi visita il sito a fini statistici, etc. Puoi decidere di effettuare l'opt-out da determinati cookie pubblicitari gestiti da terze parti tramite i siti di gestione di cookie di terze parti, nei casi in cui essi lo prevedono.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}