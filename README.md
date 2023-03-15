# React JS Contact App - School Project

## Screenshots aller Views

<img width="1552" alt="Screenshot 2023-03-15 at 21 18 07" src="https://user-images.githubusercontent.com/120005097/225432465-f96d38e0-8992-4508-b898-2f8b3325a00c.png">
<img width="1552" alt="Screenshot 2023-03-15 at 21 18 21" src="https://user-images.githubusercontent.com/120005097/225432455-b8498e8a-c4a4-4929-8d6c-203d9146abfb.png">
<img width="1552" alt="Screenshot 2023-03-15 at 21 18 33" src="https://user-images.githubusercontent.com/120005097/225432443-c182e98b-1e27-418b-82cb-5e4c4e87401d.png">

## Beschreibung der Funktionalität

Auf der Startseite werden alle aktuellen Kontakte angezeigt. Die Kontakte befinden sich in einem Scrollable Div. Wenn man auf das "+" bei "Neuer Kontakt" klickt, wird ein Abschnitt aufgeklappt, bei dem der Benutzer die Daten für einen neuen Kontakt eingeben kann. Es findet keine Überpüfung der Daten statt. Wenn man auf das "-" klickt, wird der Abschnitt wieder zugeklappt. Wenn man auf die Mülltone klickt, wird der Kontakt gelöscht. Wenn man nun auf den Tab History wechselt, kann man alle gelöschten Kontakte sehen, mit allen Daten inklusive dem Löschzeitpunkt. Das wechseln der Tabs funktioniert über einen Router. Man wechselt zwischen "/" für die Kontakt-Liste und "/history" für die Übersicht der gelöschten Kontakte.

Bonus Aufgaben sind in diesem Projekt react-router-dom und uuid.

## Component Tree
Als erstes der komplette Tree, der aufgebläht ist wegen dem react-router-dom.


<img width="420" alt="Screenshot 2023-03-15 at 21 15 18" src="https://user-images.githubusercontent.com/120005097/225431894-108e9f84-1565-4f3e-a3a1-cfd70d8c7824.png">

Als zweites der Component Tree ohne den Router.

<img width="301" alt="Screenshot 2023-03-15 at 21 15 35" src="https://user-images.githubusercontent.com/120005097/225431881-9b314c7c-568a-402f-b546-d0b5fcc43435.png">


## Kurze Beschreibung des Projektverlaufs

Am Anfang musste ich mich erst wieder in React einfinden um die Grundkenntnisse aufzufrischen. Daraufhin hab ich alles in der App Komponente geschrieben, danach nach und nach in einzelen Komponenten unterteilt. In diesem Schritt hab ich auch per Props die verschiedenen Daten rendern lassen. Infolge dessen auch per Props die States zu übergeben. Das größte Problem war, das beim Löschen der Kontakte das Objekt nicht als Objekt in das History-Array übertragen wurde, sondern ein Array mit einem einzelnen Kontaktobjekt übergeben wurde. Ein weiteres Problem war das Rendering der richtigen Komponente beim Router angezeigt wird. Nach ein wenig ausprobieren konnte ich das Problem auch lösen.
