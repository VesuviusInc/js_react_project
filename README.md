# React JS Contact App - School Project

## Screenshots aller Views

<img width="1552" alt="Screenshot 2023-03-15 at 15 03 56" src="https://user-images.githubusercontent.com/120005097/225333129-cd66a50f-2a43-4bc7-971d-d5db216d25c2.png">
<img width="1552" alt="Screenshot 2023-03-15 at 15 04 16" src="https://user-images.githubusercontent.com/120005097/225333116-e423c83e-3cc3-4f7f-b76a-bd6918f42669.png">
<img width="1552" alt="Screenshot 2023-03-15 at 15 04 23" src="https://user-images.githubusercontent.com/120005097/225333126-6ae0e3ad-5afd-42e1-acee-5b5e5eafc9bf.png">


## Beschreibung der Funktionalität

Es ist eine Kontakt App. Auf der Startseite werden alle aktuellen Kontakte angezeigt. Wenn man auf das "+" bei "Neuer Kontakt" klickt, wird ein Abschnitt aufgeklappt, bei dem der Benutzer die Daten für einen neuen Kontakt eingeben kann. Es findet keine Überpüfung der Daten statt. Wenn man auf das "-" klickt, wird der Abschnitt wieder zugeklappt. Wenn man auf die Mülltone klickt, wird der Kontakt gelöscht. Wenn man nun auf den Tab History wechselt, kann man alle gelöschten Kontakte sehen, mit allen Daten inklusive dem Löschzeitpunkt. Das wechseln der Tabs funktioniert über einen Router. Man wechselt zwischen "/" für die Kontakt-Liste und "/history" für die Übersicht der gelöschten Kontakte

## Component Tree
Als erstes der komplette Tree, der aufgebläht ist wegen dem react-router-dom.

<img width="378" alt="Screenshot 2023-03-12 at 15 45 05" src="https://user-images.githubusercontent.com/120005097/224552376-3b7bfb29-de87-443b-a215-337a7b23846a.png">

Als zweites der Component Tree ohne den Reactor mit der Ausgangslage und danach der gleiche Tree mit einem Element in der History.

<img width="256" alt="Screenshot 2023-03-12 at 15 46 21" src="https://user-images.githubusercontent.com/120005097/224552557-0bff2527-08c1-420b-a255-ee25ef82f6dd.png">

<img width="256" alt="Screenshot 2023-03-12 at 15 47 28" src="https://user-images.githubusercontent.com/120005097/224552566-ea34374f-d34e-409d-8c39-5d21afebb78c.png">

## Kurze Beschreibung des Projektverlaufs

Am Anfang musste ich mich erst wieder in React einfinden. Daraufhin hab ich alles in der App Komponente geschrieben, danach nach und nach in einzelen Komponenten unterteilt. Das größte Problem war, das beim Löschen der Kontakte das Objekt nicht in das andere Array übertragen wurde. Der Fehler hierbei war, das dem History-Array kein Objekt übergeben wurde, sondern ein Array mit einem Objekt, dem gelöschten Kontakt. Ein weiteres Problem war das Rendering der richtigen Komponente beim Router angezeigt wird. Nach ein wenig ausprobieren konnte ich das Problem auch lösen.
