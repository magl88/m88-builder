import gulp from "gulp";
import vinylFtp from'vinyl-ftp';
import log from'fancy-log';

// Настройки FTP соединения
const ftpConfig = {
	host: 'miata.cityhost.com.ua',
	user: 'ch1faf94f6_magl',
	password: 'BPAZ6txj0Q',
	parallel: 5,  // Количество одновременных потоков
	log: log
};

// Путь к локальной папке с файлами, которые нужно загрузить
// const localFilesGlob = app.path.buildFolder + '**/*';

// Путь к удаленной папке, куда будут загружаться файлы
const remoteFolderPath = '/www/marchenko-ruslan.com/wp-content/themes/m88';

// Функция для удаления всех файлов в указанной удаленной папке
function cleanRemoteDir(cb) {
	const conn = vinylFtp.create(ftpConfig);

	conn.rmdir(remoteFolderPath, cb);
}

// Функция для загрузки файлов из локальной папки в удаленную папку
function uploadFiles() {
	const conn = vinylFtp.create(ftpConfig);

	return gulp.src(app.path.buildFolder + '**/*', { buffer: false })
		.pipe(conn.dest(remoteFolderPath));
}

export const ftpUpdate = (cb) => {
	console.log('Console: AAAAA' );

	const conn = vinylFtp.create(ftpConfig);
	console.log('Console: EEEE', conn );
	// return conn.rmdir(remoteFolderPath, cb);

	return gulp.src(app.path.buildFolder + '**/*', { buffer: false })
		.pipe(conn.rmdir(remoteFolderPath, cb))
		.pipe(conn.rmdir(remoteFolderPath, cb))
		.pipe(conn.dest(remoteFolsderPath));
}
