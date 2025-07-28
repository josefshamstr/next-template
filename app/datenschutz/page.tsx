import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | TechCorp GmbH',
  description:
    'Datenschutzerklärung und Informationen zum Datenschutz der TechCorp GmbH',
};

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col mx-auto min-h-screen py-12 justify-center items-start">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8">
        {/* Einleitung */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>
        </section>

        {/* Datenerfassung */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Datenerfassung auf dieser Website
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Wofür nutzen wir Ihre Daten?
            </h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </div>
        </section>

        {/* Hosting */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Hosting
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">Vercel</h3>
            <p>
              Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA.
            </p>
            <p>Vercel verarbeitet folgende Daten:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>IP-Adresse</li>
              <li>Browser-Informationen</li>
              <li>Zugriffszeitpunkte</li>
              <li>Besuchte Seiten</li>
            </ul>
            <p>
              Die Datenverarbeitung erfolgt auf Grundlage unseres berechtigten
              Interesses an einer sicheren und effizienten Bereitstellung
              unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Vercel:
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>
        </section>

        {/* Allgemeine Hinweise und Pflichtinformationen */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className="ml-4">
              <p>TechCorp GmbH</p>
              <p>Musterstraße 123</p>
              <p>1010 Wien</p>
              <p>Österreich</p>
              <p>Telefon: +43 1 234 567 89</p>
              <p>E-Mail: datenschutz@techcorp.at</p>
            </div>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-medium text-gray-800">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </h3>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
              besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die
              Übertragung personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
              DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
              Zugriff auf Informationen in Ihr Endgerät (z. B. via
              Device-Fingerprinting) eingewilligt haben, erfolgt die
              Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
              Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6
              Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
              sofern diese zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
              Die Datenverarbeitung kann ferner auf Grundlage unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
              Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
              in den folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </h3>
            <p>
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
              USA oder sonstigen datenschutzrechtlich nicht sicheren
              Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Drittstaaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern
              kein mit der EU vergleichbares Datenschutzniveau garantiert werden
              kann. Beispielsweise sind US-Unternehmen dazu verpflichtet,
              personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne
              dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten.
              Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B.
              Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
              Überwachungszwecken verarbeiten, auswerten und dauerhaft
              speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen
              Einfluss.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
              DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
              VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
              DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
              VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
              PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
              KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN
              ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
              DSGVO).
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Recht auf Datenübertragbarkeit
            </h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                geschah/geschieht, können Sie statt der Löschung die
                Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </div>
        </section>

        {/* Datenerfassung auf dieser Website */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            5. Datenerfassung auf dieser Website
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies
              sind kleine Textdateien und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p>
              Teilweise können auch Cookies von Drittunternehmen auf Ihrem
              Endgerät gespeichert werden, wenn Sie unsere Seite betreten
              (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
              Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B.
              Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Websitefunktionen ohne diese
              nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
              Anzeige von Videos). Andere Cookies dienen dazu, das
              Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
            </p>
            <p>
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs (notwendige Cookies) oder zur
              Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
              (Funktionscookies, z. B. für die Warenkorbfunktion) oder zur
              Optimierung der Website (z. B. Cookies zur Messung des
              Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
              Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
              abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p>
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken
              eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
              Datenschutzerklärung gesondert informieren und ggf. eine
              Einwilligung abfragen.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Optimierung
              seiner Website – hierzu müssen die Server-Log-Dateien erfasst
              werden.
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </section>

        {/* Analytics und Tracking */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            6. Analytics und Tracking
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">
              Vercel Analytics
            </h3>
            <p>
              Diese Website nutzt Vercel Analytics, einen Webanalysedienst der
              Vercel Inc. Vercel Analytics verwendet Cookies, um die Nutzung der
              Website zu analysieren.
            </p>
            <p>
              Die durch den Cookie erzeugten Informationen über Ihre Nutzung
              dieser Website werden in der Regel an einen Server von Vercel in
              den USA übertragen und dort gespeichert. Die IP-Anonymisierung ist
              auf dieser Website aktiviert. Ihre IP-Adresse wird von Vercel
              innerhalb von Mitgliedstaaten der Europäischen Union oder in
              anderen Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum vor der Übertragung in die USA gekürzt.
            </p>
            <p>
              Die Verarbeitung der Daten erfolgt auf Grundlage unserer
              berechtigten Interessen an der Optimierung unserer Website (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Sie können die Erfassung der durch den Cookie erzeugten und auf
              Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
              an Vercel sowie die Verarbeitung dieser Daten durch Vercel
              verhindern, indem Sie das Browser-Add-on zur Deaktivierung von
              Vercel Analytics herunterladen und installieren:
              <a
                href="https://vercel.com/docs/analytics/opt-out"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                https://vercel.com/docs/analytics/opt-out
              </a>
            </p>
          </div>
        </section>

        {/* Plugins und Tools */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            7. Plugins und Tools
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-medium text-gray-800">
              Google Fonts (lokales Hosting)
            </h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts, die von Google bereitgestellt werden.
              Die Google Fonts sind lokal installiert. Eine Verbindung zu
              Servern von Google findet dabei nicht statt.
            </p>
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter
              <a
                href="https://developers.google.com/fonts/faq"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                https://developers.google.com/fonts/faq
              </a>{' '}
              und in der Datenschutzerklärung von Google:
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </div>
        </section>

        {/* Änderungen */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Änderungen dieser Datenschutzerklärung
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren
              erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <p>
              <strong>Stand: Dezember 2024</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
