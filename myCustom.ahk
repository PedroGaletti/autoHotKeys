LCtrl & Tab::AltTab
LCtrl & q::WinClose, A ; Alt+Q
^Left::Send {Home}
^Right::Send {End}
^Up::Send {Lctrl down}{Home}{Lctrl up}
^Down::Send {Lctrl down}{End}{Lctrl up}
^+Left::Send {shift down}{Home}}{shift up}
^+Right::Send {shift down}{End}}{shift up}
^+Up::Send {Lctrl down}{shift down}{Home}}{shift up}{Lctrl up}
^+Down::Send {Lctrl down}{shift down}{End}}{shift up}{Lctrl up}
#Left::Send {Lctrl down}{Left}{Lctrl up}
#Right::Send {Lctrl down}{Right}{Lctrl up}
#+Left::Send {Lctrl down}{shift down}{Left}}{shift up}{Lctrl up}
#+Right::Send {Lctrl down}{shift down}{Right}}{shift up}{Lctrl up}