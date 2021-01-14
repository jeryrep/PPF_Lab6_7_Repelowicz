# [Repozytorium laboratorium 6-7](https://github.com/jeryrep/PPF_Lab6_7_Repelowicz/tree/PPF_Lab6_7_Wlasne)
## Gałąź Własne
## Dane do logowania na stronie:
### login: admin 
### hasło: admin
## Spełnione wymagania

1.  * Home wyświetla się na początku, header ma autorskie logo (po kliknięciu użytkownik trafia
      na stronę główną), jest pasek nawigacji jako komponent
    * media queries są zastosowane m. in. w plikach CNavbar.css, CLogin.css oraz są używane flex
      properties
    * jest film z youtube na stronie głównej oraz są obrazy (m.in logo, obrazy na stronie materials
      i inne)
    * komponenty React są wszechobecne
    * zdarzenia są obecne na wszystkich stronach
2.  * jeszcze więcej zdarzeń np. na stronie contact
    * ładowanie z JSON, w pliku CDisplayContents.js, wypisywanie na stronę w pliku CMaterials.js
      (jeden sposób) oraz CCooperation.js (drugi sposób)
    * komponent warunkowo się wyświetlający to np. przycisk Zaloguj się i Wyloguj się zmieniający
      się odpowiednio gdy użytkownik się zaloguje (dane wyżej podane)
    * CContact.js zawiera w sobie komponent CFormSuccess, który wyświetla się dopiero gdy
      użytkownik wyśle formularz kontaktowy (wypełni pola jak należy)
    * formularze są obecne w komponentach CContact i CLogin
3.  * zdarzenia są typu: 
      - onClick 
      - onFocus 
      - onBlur, 
      - onMouseOver
      - onMouseMove
      - onInvalid
      - onMouseOut 
      - onCut
      - onCopy 
      - onPaste 
      - onChange 
      - onSubmit
      - onMouseDown
      - onSelect
      - onDragStart
      - onDrag
      - onDragEnd
      - onerror
      - onContextMenu
      - onDoubleClick
      - onLoad
      - onCanPlay 
      - onCanPlayThrough 
      - onDurationChange 
      - onEnded 
      - onLoadedData 
      - onLoadedMetadata 
      - onLoadStart
      - onMouseLeave 
      - onVolumeChange
      - onWaiting 
      - onTimeUpdate
      - onfocusout
      - onfocusin
      - onDrop 
      - onMouseUp
      - onAbort 
      - onDragEnter
      - onDragOver
      - onPlaying
      - onProgress
    * stosowane są wszędzie na stronach, najłatwiej je zauważyć, gdy:
      - najedziemy na logo i zabierzemy kursor z logo
      - najedziemy na tytuł strony, poruszamy po nim (dyskoteka :) ) i zabierzemy kursor
      - najedziemy na logo reacta na dole strony i zabierzemy kursor
      - na stronie materials i cooperation: każdy obrazek się powiększa po najechaniu kursorem
      - na stronie contact i login, w polach, ctrl+c, ctrl+v, ctrl+x, niepoprawne wysłanie formularza
        to dodatkowe eventy
      - onChange, onSubmit odpowiadają głównie za obsługę formularzy i ich nie widać
      - w Event sandbox, większość to console logi
      - na stronie Home, console logi
    * CFormSuccess ma oprogramowany cykl życia, widać to częściowo na stronie (zmiana tekstu,
      dodanie tekstu alternatywnego na zmienionym teście), ale głównie w konsoli
    * zostało wprowadzonych 10 różnych testów automatycznych dla strony z uzyciem bibliotek
    takich jak:
      - enzyme 
      - jest
      - testing-library/react
    * wszystkie testy przechodzą poprawnie