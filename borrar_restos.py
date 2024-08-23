import os
import datetime

def eliminar_archivos_antiguos(directorio):
    # Obtener la fecha actual
    fecha_actual = datetime.datetime.now()
    
    # Construir la fecha del día 11 del mes actual
    fecha_corte = datetime.datetime(year=fecha_actual.year, month=fecha_actual.month, day=11)
    
    # Iterar sobre los archivos en el directorio
    for archivo in os.listdir(directorio):
        ruta_archivo = os.path.join(directorio, archivo)

        # Verificar si es un archivo
        if os.path.isfile(ruta_archivo):
            # Obtener la fecha de última modificación
            timestamp_modificacion = os.path.getmtime(ruta_archivo)
            fecha_modificacion = datetime.datetime.fromtimestamp(timestamp_modificacion)

            # Comparar la fecha de modificación con la fecha de corte
            if fecha_modificacion < fecha_corte:
                try:
                    os.remove(ruta_archivo)
                    print(f'Archivo eliminado: {ruta_archivo}')
                except Exception as e:
                    print(f'No se pudo eliminar el archivo {ruta_archivo}: {e}')

# Parámetro de ejemplo
directorio = 'C:\Users\UV YINSTAR\Desktop\RIP UV 1313'

eliminar_archivos_antiguos(directorio)
