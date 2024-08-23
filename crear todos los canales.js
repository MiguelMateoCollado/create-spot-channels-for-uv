function quickSel(x, y, tol) {
    var idsetd = charIDToTypeID("setd");
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref1.putProperty(idChnl, idfsel);
    desc2.putReference(idnull, ref1);
    var idT = charIDToTypeID("T   ");
    var desc3 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    var idPxl = charIDToTypeID("#Pxl");
    desc3.putUnitDouble(idHrzn, idPxl, x);
    var idVrtc = charIDToTypeID("Vrtc");
    var idPxl = charIDToTypeID("#Pxl");
    desc3.putUnitDouble(idVrtc, idPxl, y);
    var idPnt = charIDToTypeID("Pnt ");
    desc2.putObject(idT, idPnt, desc3);
    var idTlrn = charIDToTypeID("Tlrn");
    desc2.putInteger(idTlrn, tol);
    var idAntA = charIDToTypeID("AntA");
    desc2.putBoolean(idAntA, true);
    var idCntg = charIDToTypeID("Cntg");
    desc2.putBoolean(idCntg, false);
    executeAction(idsetd, desc2, DialogModes.NO);
};

quickSel(10, 10, 12)

function createAlphaChannelFromSelection() {
    var doc = app.activeDocument; // Obtén el documento activo

    if (doc.selection == null) {
        alert("No hay ninguna selección activa.");
        return;
    }

    // Crear un nuevo canal alfa
    var channelNames = ["W1", "W2", "V1", "V2"];

    for (var o = 0; o < channelNames.length; o++) {
        var alphaChannel = doc.channels.add();
        alphaChannel.kind = ChannelType.SPOTCOLOR
    

        alphaChannel.name = channelNames[o];
        doc.selection.fill(app.foregroundColor);
    }

    // Rellenar el canal alfa con la selección
    for (var j = 0; j < doc.channels.length - 1; j++) {

        doc.channels[j].visible = true;
    }

    // alert("Canal alfa creado a partir de la selección.");
}

// Ejecutar la función
createAlphaChannelFromSelection();


app.activeDocument.selection.deselect()